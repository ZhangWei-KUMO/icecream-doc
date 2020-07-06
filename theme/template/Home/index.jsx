import React, { PureComponent } from "react";
import { injectIntl } from "react-intl";
import Helmet from "react-helmet";
import { Link } from "bisheng/router";
import { Button } from "icecreamd";
import Footer from "../Layout/Footer";
import getStyle from "../utils/getStyle";
import "icecreamd/lib/Button/style/index.css";
import config from "../../../bisheng.config";
import packa from "../../../package.json";

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
            <img
              alt="home-logo"
              className="home-logo"
              src={config.baseConfig.logo}
            />
            <div className="home">
              <h1>
                {messages["app.home.slogan"]}
                {" "}
                <br />
                {messages["app.home.slogan.name"]}
              </h1>
              <Link to={messages["app.doc.link"]}>
                <Button type="primary">
                  {messages["app.btn.doc"]}
                  Writing now
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
          <Footer />
        </div>
      </div>
    );
  }
}

export default injectIntl(Home);
