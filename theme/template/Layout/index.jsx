/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/static-property-placement */
import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
// import "moment/locale/zh-cn";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import Header from "./Header";
import enUs from "../../en-US";
import zhCn from "../../zh-CN";

if (typeof window !== "undefined" && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}

if (typeof window !== "undefined") {
  /* eslint-disable global-require */
  require("../../static/style");

  // Expose to iframe
  window.react = React;
  window["react-dom"] = ReactDOM;
  window.antd = require("antd");

  window.addEventListener("error", (e) => {
    if (e.message === "ResizeObserver loop limit exceeded") {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  });
}

export default class Layout extends React.Component {
  static contextTypes = {
    // router: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    const { location } = this.props;
    this.state = {
      appLocale: location.pathname.indexOf("cn") > -1 ? zhCn : enUs
    };
  }

  componentDidMount() {
    // 顶部渲染进度条
    const nprogressHiddenStyle = document.getElementById("nprogress-style");
    if (nprogressHiddenStyle) {
      this.timer = setTimeout(() => {
        nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
      }, 0);
    }
  }

  render() {
    const { children, ...restProps } = this.props;
    const { appLocale } = this.state;
    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <ConfigProvider locale={appLocale.locale === "zh-CN" ? zhCN : null}>
          <div className="page-wrapper">
            <Header {...restProps} messages={appLocale.messages} />
            {children}
          </div>
        </ConfigProvider>
      </IntlProvider>
    );
  }
}
