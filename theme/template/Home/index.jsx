import React, { Fragment, Component } from 'react';
import { injectIntl } from 'react-intl';
import Helmet from 'react-helmet';
import { Link } from 'bisheng/router';
import Footer from '../Layout/Footer';
import { Button } from 'icecreamd';
import getStyle from '../utils/getStyle';
import 'icecreamd/lib/Button/style/index.css';
import config from '../../../bisheng.config';
import packa from '../../../package.json';

class Home extends Component {
  render() {
    let { messages } = this.props.intl;
    return (
      <Fragment>
        <Helmet>
          <title>{`${config.baseConfig.projectName} - 首页`}</title>
        </Helmet>
        <div>
          <style dangerouslySetInnerHTML={{ __html: getStyle() }} />
          <div className="container">
            <img className="home-logo" src={config.baseConfig.logo} />
            <div className="home">
              <h1>{messages["app.home.slogan"]} <br /> {messages["app.home.slogan.name"]}</h1>
              <Link to={messages["app.doc.link"]} >
                <Button type="primary">{messages["app.btn.doc"]} Writing now</Button>
              </Link>
              <a href={config.baseConfig.library} target="__blank">
                <Button>{packa.version} Github</Button>
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default injectIntl(Home);
