/* eslint-disable react/no-danger */
import React, { PureComponent } from "react";
import { injectIntl } from "react-intl";
import Helmet from "react-helmet";
import { Link } from "bisheng/router";
import { Row, Col } from "antd";
import { Button } from "icecreamd";
import Footer from "./Layout/Footer";
import getStyle from "./utils/getStyle";
import "icecreamd/lib/Button/style/index.css";
import config from "../../bisheng.config";
import packa from "../../package.json";

class Home extends PureComponent {
  render() {
    const { intl } = this.props;
    const { messages } = intl;
    return (
      <div>
        <Helmet>
          <title>{`${config.baseConfig.projectName} - 首页`}</title>
        </Helmet>
        <div>
          <style dangerouslySetInnerHTML={{ __html: getStyle() }} />
          <div className="container">
            <Row>
              <Col lg={12} sm={24}>
                <img
                  alt="home-logo"
                  className="home-logo"
                  src={config.baseConfig.logo}
                />
              </Col>
              <Col lg={12} sm={24}>
                <div className="home">
                  <h1>
                    {messages["app.home.slogan"]}
                    <br />
                    {messages["app.home.introduce"]}
                  </h1>
                  <div className="home-btns">
                    <Link to={messages["app.home.link"]}>
                      <Button type="primary">
                        {messages["app.btn.doc"]}
                        {" "}
                        {messages["app.home.notice"]}
                      </Button>
                    </Link>
                    <a href={config.baseConfig.library} target="__blank">
                      <Button>
                        Github beta-
                        {packa.version}
                      </Button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default injectIntl(Home);
