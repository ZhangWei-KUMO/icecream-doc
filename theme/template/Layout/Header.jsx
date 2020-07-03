import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
// import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Select, Menu, Row, Col, Icon, Popover, Input, Button, Badge } from 'antd';
import config from '../../../bisheng.config';

export default class Header extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    };
    state = {
        menuVisible: false,
    };

    componentDidMount() {
        // const { intl } = this.context;
        const { router } = this.context;
        router.listen(this.handleHideMenu);
        const { searchInput } = this;
        document.addEventListener('keyup', event => {
            if (event.keyCode === 83 && event.target === document.body) {
                searchInput.focus();
            }
        });
    }


    handleHideMenu = () => {
        this.setState({
            menuVisible: false,
        });
    };

    switchLanguage = () => {
        const { themeConfig } = this.props;
        let { href, basename, pathname } = window.location;
        if (pathname === '/') {
            window.location.href = `${href}index-cn`;
            return;
        }
        if (/\/?index-en/.test(pathname)) {
            let newHref = href.replace("index-en", "index-cn")
            window.location.href = newHref;
            return;
        }
        if (/\/?index-cn/.test(pathname)) {
            let newHref = href.replace("index-cn", "index-en")
            window.location.href = newHref;
            return;
        }
        if (/\/?\/cn/.test(pathname)) {
            let newHref = href.replace("/cn/", "/en/")
            window.location.href = newHref;
        } else {
            let newHref = href.replace("/en/", "/cn/")
            window.location.href = newHref;
        }

    }
    render() {
        const headerClassName = classNames({
            clearfix: true,
        });
        let { messages } = this.props;
        return (
            <header id="header" className={headerClassName}>
                <Row>
                    <Col xxl={4} xl={5} lg={5} md={5} sm={24} xs={24}>
                        <Link to='/' id="logo">
                            <img alt="logo" src={config.baseConfig.logo} />
                            <span style={{ fontSize: '17px', color: "#000" }}>{config.baseConfig.projectName}</span>
                        </Link>
                    </Col>
                    <Col xxl={20} xl={19} lg={19} md={19} sm={0} xs={0}>
                        <div className="tools-bar">
                            <a onClick={this.switchLanguage}>{messages['app.header.lang']}</a>
                        </div>
                    </Col>
                </Row>
            </header>
        );
    }
}
