import React, { Fragment, Component } from 'react';
import { injectIntl } from 'react-intl';
import Helmet from 'react-helmet';

import { Link } from 'bisheng/router';
import Footer from '../Layout/Footer';
import { Button } from 'icecreamd';
import getStyle from '../utils/getStyle';
import 'icecreamd/lib/Button/style/index.css';
import config from '../../../bisheng.config';
// import zh_CN from '../../zh-CN'
// import en_US from '../../en_US';


class Home extends Component {
  render() {
    let { messages } = this.props.intl;
    console.log(messages)
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
              <Link to={config.baseConfig.homeUrl} >
                <Button type="primary">中文文档</Button>
              </Link>
              <Link to={config.baseConfig.homeUrl}  >
                <Button>English Doc</Button>
              </Link>
              <a href={config.baseConfig.library} target="__blank">
                <Button>Github</Button>
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
