import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import { Row, Col, Menu, Icon, Affix } from 'antd';
import classNames from 'classnames';
import get from 'lodash/get';
import MobileMenu from 'rc-drawer';
import Article from './Article';
import PrevAndNext from './PrevAndNext';
import Footer from '../Layout/Footer';
import ComponentDoc from './ComponentDoc';
import getModuleData from '../utils/getModuleData';
import 'antd/dist/antd.css';
import * as utils from '../utils';
import { getActiveMenuItem, fileNameToPath, getSideBarOpenKeys } from '../utils/handleMenu';
import { handleInitialHashOnLoad } from '../utils/pageListener';

const { SubMenu } = Menu;

export default class MainContent extends Component {
    static contextTypes = {
        intl: PropTypes.object.isRequired,
        isMobile: PropTypes.bool.isRequired,
    };

    state = {
        openKeys: undefined,
    };

    componentDidMount() {
        this.componentDidUpdate();
        window.addEventListener('load', this.handleInitialHashOnLoad);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleInitialHashOnLoad);
    }

    static getDerivedStateFromProps(props, state) {
        if (!state.openKeys) {
            return {
                ...state,
                openKeys: getSideBarOpenKeys(props),
            };
        }
        return null;
    }

    componentDidUpdate(prevProps) {
        const { location } = this.props;
        const { location: prevLocation = {} } = prevProps || {};
        if (!prevProps || prevLocation.pathname !== location.pathname) {
            this.bindScroller();
        }
        if (!window.location.hash && prevLocation.pathname !== location.pathname) {
            window.scrollTo(0, 0);
        }
        // when subMenu not equal
        if (get(this.props, 'route.path') !== get(prevProps, 'route.path')) {
            // reset menu OpenKeys
            this.handleMenuOpenChange();
        }
    }

    getMenuItems(footerNavIcons = {}) {
        const { themeConfig } = this.props;
        const {
            intl: { locale },
        } = this.context;
        const moduleData = getModuleData(this.props);
        const menuItems = utils.getMenuItems(
            moduleData,
            locale,
            themeConfig.categoryOrder,
            themeConfig.typeOrder,
        );
        return menuItems.map(menuItem => {
            if (menuItem.children) {
                return (
                    <SubMenu title={<h4>{menuItem.title}</h4>} key={menuItem.title}>
                        {menuItem.children.map(child => {
                            if (child.type === 'type') {
                                return (
                                    <Menu.ItemGroup title={child.title} key={child.title}>
                                        {child.children
                                            // .sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
                                            .map(leaf => this.generateMenuItem(false, leaf, footerNavIcons))}
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

    getFooterNav(menuItems, activeMenuItem) {
        const menuItemsList = this.flattenMenu(menuItems);
        let activeMenuItemIndex = -1;
        menuItemsList.forEach((menuItem, i) => {
            if (menuItem && menuItem.key === activeMenuItem) {
                activeMenuItemIndex = i;
            }
        });
        const prev = menuItemsList[activeMenuItemIndex - 1];
        const next = menuItemsList[activeMenuItemIndex + 1];
        return { prev, next };
    }

    handleMenuOpenChange = openKeys => {
        this.setState({ openKeys });
    };

    // 绑定菜单滚动
    bindScroller() {
        if (this.scroller) {
            this.scroller.destroy();
        }
        require('intersection-observer'); // eslint-disable-line
        const scrollama = require('scrollama');
        this.scroller = scrollama();
        let elements = this.scroller.setup({ step: '.markdown > h2, .code-box', offset: 0 });
        elements.onStepEnter(({ element }) => {
            [].forEach.call(document.querySelectorAll('.toc-affix li a'), node => {
                node.className = ''; // eslint-disable-line
            });
            const currentNode = document.querySelectorAll(`.toc-affix li a[href="#${element.id}"]`)[0];
            if (currentNode) {
                currentNode.className = 'current';
            }
        });
    }
    // 生成菜单项
    generateMenuItem(isTop, item, { before = null, after = null }) {
        const {
            intl: { locale },
        } = this.context;
        const key = fileNameToPath(item.filename);
        if (!item.title) {
            return null;
        }
        const title = item.title[locale] || item.title;
        const text = isTop
            ? title
            : [
                <span key="english">{title}</span>,
                <span className="chinese" key="chinese">
                    {item.subtitle}
                </span>,
            ];
        const { disabled } = item;
        const url = item.filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '').toLowerCase();

        const child = !item.link ? (
            <Link
                to={utils.getLocalizedPathname(
                    /^components/.test(url) ? `${url}/` : url,
                    locale === 'zh-CN',
                )}
                disabled={disabled}
            >
                {before}
                {text}
                {after}
            </Link>
        ) : (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled={disabled}
                    className="menu-item-link-outside"
                >
                    {before}
                    {text} <Icon type="export" />
                    {after}
                </a>
            );

        return (
            <Menu.Item key={key.toLowerCase()} disabled={disabled}>
                {child}
            </Menu.Item>
        );
    }

    flattenMenu(menu) {
        if (!menu) {
            return null;
        }
        if (menu.type && menu.type.isMenuItem) {
            return menu;
        }
        if (Array.isArray(menu)) {
            return menu.reduce((acc, item) => acc.concat(this.flattenMenu(item)), []);
        }
        return this.flattenMenu((menu.props && menu.props.children) || menu.children);
    }

    render() {
        const { props } = this;
        const { isMobile } = this.context;
        const { openKeys } = this.state;
        const activeMenuItem = getActiveMenuItem(props);

        const menuItems = this.getMenuItems();
        const menuItemsForFooterNav = this.getMenuItems({
            before: <Icon className="footer-nav-icon-before" type="left" />,
            after: <Icon className="footer-nav-icon-after" type="right" />,
        });
        const { prev, next } = this.getFooterNav(menuItemsForFooterNav, activeMenuItem);
        const { localizedPageData } = props;
        const mainContainerClass = classNames('main-container', {
            'main-container-component': !!props.demos,
        });
        const menuChild = (
            <Menu
                inlineIndent="40"
                className="aside-container menu-site"
                mode="inline"
                openKeys={openKeys}
                selectedKeys={[activeMenuItem]}
                onOpenChange={this.handleMenuOpenChange}
            >
                {menuItems}
            </Menu>
        );
        return (
            <div className="main-wrapper">
                <Row>
                    {isMobile ? (
                        <MobileMenu
                            iconChild={[<Icon type="menu-unfold" />, <Icon type="menu-fold" />]}
                            key="Mobile-menu"
                            wrapperClassName="drawer-wrapper"
                        >
                            {menuChild}
                        </MobileMenu>
                    ) : (
                            <Col xxl={4} xl={5} lg={6} md={24} sm={24} xs={24} className="main-menu">
                                <Affix>
                                    <section className="main-menu-inner">{menuChild}</section>
                                </Affix>
                            </Col>
                        )}
                    <Col xxl={20} xl={19} lg={18} md={24} sm={24} xs={24}>
                        <section className={mainContainerClass}>
                            {props.demos ? (
                                <ComponentDoc {...props} doc={localizedPageData} demos={props.demos} />
                            ) : (
                                    <Article {...props} content={localizedPageData} />
                                )}
                        </section>
                        <PrevAndNext prev={prev} next={next} />
                        <Footer />
                    </Col>
                </Row>
            </div>
        );
    }
}
