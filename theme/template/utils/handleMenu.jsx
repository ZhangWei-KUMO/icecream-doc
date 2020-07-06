import * as utils from "./index";
import getModuleData from "./getModuleData";

export function getActiveMenuItem(props) {
  let { children } = props.params;
  children = children.indexOf(".html") > 0 ? children.replace(".html", "-cn") : children;
  return (
    (children && children.replace("-cn", "")) || props.location.pathname.replace(/(^\/|-cn$)/g, "")
  );
}

export function fileNameToPath(filename) {
  const snippets = filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, "").split("/");
  return snippets[snippets.length - 1];
}

// 获取左侧主菜单栏索引值
export const getSideBarOpenKeys = (nextProps) => {
  // 获取主题配置对象
  const { themeConfig } = nextProps;
  const { pathname } = nextProps.location;
  // 确定当前文件是的语言版本是zh-CN还是en-US
  const locale = utils.isZhCN(pathname) ? "zh-CN" : "en-US";
  const moduleData = getModuleData(nextProps);
  const shouldOpenKeys = utils
    .getMenuItems(moduleData, locale, themeConfig.categoryOrder, themeConfig.typeOrder)
    .map((m) => (m.title && m.title[locale]) || m.title);
  return shouldOpenKeys;
};
