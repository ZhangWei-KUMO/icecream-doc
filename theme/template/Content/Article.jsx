import React, { Children, cloneElement, Fragment } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import Helmet from "react-helmet";
import { getChildren } from "jsonml.js/lib/utils";
import { Timeline, Alert, Affix } from "antd";
import config from "../../../bisheng.config";
import { onResourceClick } from "../utils/pageListener";

export default class Article extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { location } = this.props;
    const { location: nextLocation } = nextProps;

    if (nextLocation.pathname === location.pathname) {
      return false;
    }
    return true;
  }

  getArticle(article) {
    const { content } = this.props;

    const { meta } = content;
    if (!meta.timeline) {
      return article;
    }
    const timelineItems = [];
    let temp = [];
    let i = 1;
    Children.forEach(article.props.children, (child) => {
      if (child.type === "h2" && temp.length > 0) {
        timelineItems.push(<Timeline.Item key={i}>{temp}</Timeline.Item>);
        temp = [];
        i += 1;
      }
      temp.push(child);
    });
    if (temp.length > 0) {
      timelineItems.push(<Timeline.Item key={i}>{temp}</Timeline.Item>);
    }
    return cloneElement(article, {
      children: <Timeline>{timelineItems}</Timeline>
    });
  }

  render() {
    const { content, intl } = this.props;
    const { meta, description } = content;
    const { title, subtitle, filename } = meta;
    const { locale } = intl;
    // 通过context设置全局语言变量
    const isNotTranslated = locale === "en-US" && typeof title === "object";
    return (
      <>
        <Helmet>
          <title>
            {`${title[locale] || title} - ${config.baseConfig.projectName}`}
          </title>
        </Helmet>

        <article className="markdown" onClick={(e) => onResourceClick(e)}>
                  {isNotTranslated && (
            <Alert type="warning" message={(
              <span>
                  This article has not been translated yet. Wanna help us out?&nbsp;
                <a href="https://github.com/ant-design/ant-design/issues/1471">
                    See this issue on GitHub.
                  </a>
                </span>
              )}
            />
          )}
                  <h1>
            {title[locale] || title}
            {!subtitle || locale === "en-US" ? null : <span className="subtitle">{subtitle}</span>}

          </h1>
                  {!description
            ? null
            : this.props.utils.toReactComponent(
              ["section", { className: "markdown" }].concat(getChildren(description))
            )}
                  {!content.toc || content.toc.length <= 1 || meta.toc === false ? null : (
            <Affix className="toc-affix" offsetTop={16}>
              {this.props.utils.toReactComponent(
                ["ul", { className: "toc" }].concat(getChildren(content.toc))
              )}
            </Affix>
          )}
                  {this.getArticle(
            this.props.utils.toReactComponent(
              ["section", { className: "markdown" }].concat(getChildren(content.content))
            )
          )}
                  {this.props.utils.toReactComponent(
            [
              "section",
              {
                className: "markdown api-container"
              }
            ].concat(getChildren(content.api || ["placeholder"]))
          )}
                </article>
      </>
    );
  }
}
