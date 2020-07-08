const baseConfig = {
  logo: "https://test-1253763202.cos.ap-shanghai.myqcloud.com/applications/icecream.png",
  projectName: "Icecream Design",
  homeUrl: "/docs/cn/getting-started-cn.html",
  library: "https://github.com/ZhangWei-KUMO/icecreamd"
};

const themeConfig = {
  categoryOrder: {
    前言: 1,
    文档: 2,
    Overview: 3,
    Document: 4
  },
  typeOrder: {
    通用: 1,
    数据展示: 2,
    Common: 3,
    DataShow: 4
  }
};

module.exports = { themeConfig, baseConfig };
