/**
 * 整个毕昇项目的根文件
 */
const path = require("path");
// 导入两个页面模板，一个主页，一个文档
const homeTmpl = "./template/Home/index";
const contentTmpl = "./template/Content/index";

function pickerGenerator(module) {
  const tester = new RegExp(`^docs/${module}`);
  return (markdownData) => {
    const { filename } = markdownData.meta;
    if (tester.test(filename) && !/\/demo$/.test(path.dirname(filename))) {
      return {
        meta: markdownData.meta
      };
    }
    return null;
  };
}

module.exports = {
  pick: {
    components(markdownData) {
      const { filename } = markdownData.meta;
      if (!/^components/.test(filename) || /[/\\]demo$/.test(path.dirname(filename))) {
        return null;
      }
      return {
        meta: markdownData.meta
      };
    },
    changelog(markdownData) {
      if (/CHANGELOG/.test(markdownData.meta.filename)) {
        return {
          meta: markdownData.meta
        };
      }
      return null;
    },
    "docs/pattern": pickerGenerator("pattern"),
    "docs/cn": pickerGenerator("cn"),
    "docs/en": pickerGenerator("en"),
    "docs/resource": pickerGenerator("resource"),
    "docs/spec": pickerGenerator("spec")
  },
  plugins: [
    "bisheng-plugin-description",
    // 组件可视化
    "bisheng-plugin-codebox?lang=jsx",
    // 右侧导航栏
    "bisheng-plugin-toc?maxDepth=2&keepElem",
    "bisheng-plugin-antd?injectProvider",
    "bisheng-plugin-react?lang=__react"
  ],
  routes: {
    path: "/",
    component: "./template/Layout/index",
    indexRoute: { component: homeTmpl },
    childRoutes: [
      {
        path: "index-cn",
        component: homeTmpl
      },
      {
        path: "index-en",
        component: homeTmpl
      },
      {
        path: "docs/cn/:children",
        component: contentTmpl
      },
      {
        path: "docs/en/:children",
        component: contentTmpl
      },
      {
        path: "components/:children/",
        component: contentTmpl
      }
    ]
  }
};
