
import * as utils from './index';

function getModuleData(props) {
  let { pathname } = props.location;
  // 如果是html静态文件则跳转英文页面
  pathname = pathname.indexOf('.html') > 0 ? pathname.replace('.html', '-cn') : pathname;

  const moduleName = /^\/?components/.test(pathname)
    ? 'components'
    : pathname
      .split('/')
      .filter(item => item)
      .slice(0, 2)
      .join('/');
  const moduleData = moduleName === 'components' || moduleName === 'docs/react' || moduleName === 'docs/english' ?
    [...props.picked.components, ...props.picked[moduleName], ...props.picked.changelog]
    : props.picked[moduleName];

  const excludedSuffix = utils.isZhCN(pathname) ? 'en-US.md' : 'zh-CN.md';

  return moduleData.filter(({ meta }) => !meta.filename.endsWith(excludedSuffix));
}

export default getModuleData;