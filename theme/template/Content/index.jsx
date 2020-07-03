import collect from 'bisheng/collect';
import MainContent from './MainContent';

const locale = 'en-US'; // 'zh-CN'

export default collect(async nextProps => {
    let { pathname } = nextProps.location;
    const pageDataPath = pathname.split('/');

    const pageData = nextProps.utils.get(nextProps.data, pageDataPath);
    if (!pageData) {
        throw 404;
    }
    // const pageDataPromise = pageData[Object.keys(pageData)[0]];

    return { localizedPageData: pageData };
})(MainContent);
