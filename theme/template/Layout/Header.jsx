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
        // intl: PropTypes.object.isRequired,
        // isMobile: PropTypes.bool.isRequired,
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
        const { location, themeConfig } = this.props;
        // 如果不存在任何语言注释,则跳转英文首页
        if (location.pathname.indexOf('-cn') === -1 && location.pathname.indexOf('-en') === -1) {
            window.location.href = '/index-cn';
            return;
        }
        let newPathname;
        if (location.pathname.indexOf('-cn') > -1) {
            newPathname = location.pathname.replace('-cn', '-en');
        } else {
            newPathname = location.pathname.replace('-en', '-cn')
        }
        window.location.href = newPathname
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
