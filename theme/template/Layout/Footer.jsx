import React from "react";
import { injectIntl } from "react-intl";

import config from "../../../bisheng.config";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.lessLoaded = false;
  }

  render() {
    const { intl } = this.props;
    const { messages } = intl;
    const year = new Date().getFullYear();
    return (
      <footer id="footer">
        <div className="bottom-bar">
          <a target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn">
            {messages["app.footer.name"]}
          </a>
          © 2019 -
          {year}
        </div>
      </footer>
    );
  }
}

export default injectIntl(Footer);
