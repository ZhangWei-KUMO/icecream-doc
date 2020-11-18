import React from "react";
import { Link } from "bisheng/router";
import classNames from "classnames";
import { Row, Col, Icon } from "antd";
import config from "../../../bisheng.config";

class Header extends React.Component {
  render() {
    const headerClassName = classNames({
      clearfix: true
    });
    const { messages } = this.props;
    return (
      <header id="header" className={headerClassName}>
        <Row>
          <Col xxl={4} xl={5} lg={5} md={0} sm={0} xs={0}>
            <Link to="/" id="logo">
              <img alt="logo" src={config.baseConfig.logo} />
              <span style={{ fontSize: "20px", color: "#444", lineHeight: "60px" }}>
                {config.baseConfig.projectName}
              </span>
            </Link>
          </Col>
          <Col xxl={20} xl={19} lg={19} md={0} sm={0} xs={0}>
            <div className="tools-bar">
            </div>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;
