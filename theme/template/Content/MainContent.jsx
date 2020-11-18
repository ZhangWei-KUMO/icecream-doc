/* eslint-disable react/jsx-props-no-spreading */
import React, { Component, Suspense } from "react";
import { Link } from "react-router";
import {
  Row, Col, Menu, Icon, Affix
} from "antd";
import classNames from "classnames";
import get from "lodash/get";
import MobileMenu from "rc-drawer";
import { injectIntl } from "react-intl";
// import scrollama from "scrollama";
import PrevAndNext from "./PrevAndNext";
import Footer from "../Layout/Footer";
import getModuleData from "../utils/getModuleData";
import getMenuItems from "../utils";
import { getActiveMenuItem, fileNameToPath, getSideBarOpenKeys } from "../utils/handleMenu";
import { getFooterNav, bindScroller } from "../utils/menu";
import config from "../../../bisheng.config";
import executeSdk from '../utils/wechat';
import { updateAppMessageShareData, updateTimelineShareData } from "../utils/share";

const Article = React.lazy(() => import("./Article"));

// const scroller = scrollama();

const { SubMenu } = Menu;
class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: undefined,
      mobileMenuState: false
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (!state.openKeys) {
      return {
        ...state,
        // 放开注释可以支持桌面端导航展开
        // openKeys: screen.width > 700 ? getSideBarOpenKeys(props) : undefined
        openKeys: undefined
      };
    }
    return null;
  }

  trigger = () => {
    let { mobileMenuState } = this.state;
    this.setState({
      mobileMenuState: !mobileMenuState
    })
  }

  handleMenuOpenChange = (openKeys) => {
    let { mobileMenuState } = this.state;
    this.setState({
      openKeys
    });
  };
  componentDidMount() {
    const { href } = window.location;
    const { meta, description } = content;
    const { title, subtitle } = meta;
    if (window.location.host !== "localhost:8000") {
      executeSdk(href);
      wx.ready(() => {
        // 分享文章给朋友
        updateAppMessageShareData(href, title, config.baseConfig.logo, "");
        // 分享文章到朋友圈
        updateTimelineShareData(href, title, config.baseConfig.logo);
      });
    }
  }
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const { location: prevLocation = {} } = prevProps || {};
  }


  getMenuItem(footerNavIcons = {}) {
    const { themeConfig, intl } = this.props;
    const { locale } = intl;
    // 核心代码：获取模块数据
    const moduleData = getModuleData(this.props);
    const menuItems = getMenuItems(
      moduleData,
      locale,
      themeConfig.categoryOrder,
      themeConfig.typeOrder
    );
    return menuItems.map((menuItem) => {
      if (menuItem.children) {
        return (
          <SubMenu title={<h4>{menuItem.title}</h4>} key={menuItem.title}>
            {menuItem.children.map((child) => {
              if (child.type === "type") {
                return (
                  <Menu.ItemGroup title={child.title} key={child.title}>
                    {child.children
                      .sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
                      .map((leaf) => this.generateMenuItem(false, leaf, footerNavIcons))}
                  </Menu.ItemGroup>
                );
              }
              return this.generateMenuItem(false, child, footerNavIcons);
            })}
          </SubMenu>
        );
      }
      return this.generateMenuItem(true, menuItem, footerNavIcons);
    });
  }



  // 生成左侧菜单对象
  generateMenuItem(isTop, item, { before = null, after = null }) {
    const { intl } = this.props;
    const { locale } = intl;
    const key = fileNameToPath(item.filename);
    if (!item.title) {
      return null;
    }
    const title = item.title[locale] || item.title;
    const text = <span key="english">{title}</span>
    const { disabled } = item;
    const url = item.filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, "").toLowerCase();
    const child = (
      <Link to={url}>
        {/* {before} */}
        {text}
        {/* {after} */}
      </Link>
    );

    return (
      <Menu.Item key={key.toLowerCase()}
        disabled={disabled}
      >
        {child}
      </Menu.Item>
    );
  }

  render() {
    const { localizedPageData, demos } = this.props;
    const { openKeys, mobileMenuState } = this.state;
    const activeMenuItem = getActiveMenuItem(this.props);
    const headerClassName = classNames({
      clearfix: true
    });
    const menuItems = this.getMenuItem();
    const menuItemsForFooterNav = this.getMenuItem({
      before: <Icon className="footer-nav-icon-before" type="left" />,
      after: <Icon className="footer-nav-icon-after" type="right" />
    });
    const { prev, next } = getFooterNav(menuItemsForFooterNav, activeMenuItem);
    const mainContainerClass = classNames("main-container", {
      "main-container-component": !!demos
    });
    const menuChild = (
      <Menu
        inlineIndent="40"
        className="aside-container menu-site"
        mode="inline"
        inlineCollapsed={false}
        openKeys={openKeys}
        selectedKeys={[activeMenuItem]}
        onOpenChange={this.handleMenuOpenChange}
      >
        {menuItems}
      </Menu>
    );
    return (
      <div>
        <header id="header" className={headerClassName}>
          <Row>
            <Col xxl={0} xl={0} lg={0} md={20} sm={20} xs={20}>
              <Link to="/" id="logo">
                <img alt="logo" src={config.baseConfig.logo} />
                <span style={{ fontSize: "20px", color: "#444", lineHeight: "60px" }}>
                  {config.baseConfig.projectName}
                </span>
              </Link>
            </Col>
            <Col xxl={0} xl={0} lg={0} md={4} sm={4} xs={4}>
              <div className="tools-bar" onClick={() => this.trigger()}>
                {mobileMenuState ?
                  <Icon className="footer-nav-icon-before" type="close" style={{ fontSize: '22px' }} />
                  : <Icon className="footer-nav-icon-before" type="menu-fold" style={{ fontSize: '22px' }} />
                }
              </div>
            </Col>
          </Row>
        </header>
        <div className="main-wrapper">
          <Row>
            <Col xxl={4} xl={5} lg={6} md={mobileMenuState ? 24 : 0} sm={mobileMenuState ? 24 : 0} xs={mobileMenuState ? 24 : 0} className="main-menu">
              <section className="main-menu-inner">{menuChild}</section>
            </Col>

            <Col xxl={20} xl={19} lg={18} md={24} sm={24} xs={24}>
              <Suspense fallback={<div>Loading...</div>}>
                <section className={mainContainerClass}>
                  <Article {...this.props} content={localizedPageData} />
                </section>
                <PrevAndNext prev={prev} next={next} />
              </Suspense>
              <Footer />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default injectIntl(MainContent);
