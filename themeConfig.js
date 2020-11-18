const baseConfig = {
  logo: "https://test-1253763202.cos.ap-shanghai.myqcloud.com/applications/icecream.png",
  projectName: "Antd风格文档",
  projectNameLogo: "https://test-1253763202.cos.ap-shanghai.myqcloud.com/applications/icecream.png",
  homeUrl: "/index.html",
  library: "https://github.com/ZhangWei-KUMO/icecream-doc"
};

const themeConfig = {
  categoryOrder: {
    前言: 0,
    社会主义经济理论: 1,
    概率论与数理统计: 2,
    微观经济学: 3,
    宏观经济学: 4,
    西方经济学: 5,
    货币银行学: 6,
    微积分: 7,
    数据应用: 8,
  },
  typeOrder: {
    "必考点": 1
  }
};

module.exports = { themeConfig, baseConfig };
