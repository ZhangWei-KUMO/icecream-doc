const express = require("express");
const fetch = require("isomorphic-unfetch");

// 下面ACCESS_TOKEN需要从 https://cloud-wave.cn/remote/api/relay/access_token 动态获取
const ACCESS_TOKEN = "37_O_ysgpgmRw_5xhko5zClVnbxGIMJ2eFaTpD3BGWJh4pPWH1jReeH8OBwO89sQ9l6gs41Gc7ugtD5ZVeAF2F_l-Gr1zzKxOul6Ks74yMwoL47pPt1K-Nue7cpu5-NJ3BwsM7NJofHoSK1WvsnCDAjAGAXYV";

const server = express();
// 自定义菜单接口
async function Get() {
  try {
    const obj = {
      button: [
        {
          type: "view",
          name: "经济统计学",
          url: "https://cloud-wave.cn/probability/",
          key: "V1001_TODAY_MUSIC"
        },
        {
          type: "miniprogram",
          name: "小程序",
          pagepath: "pages/index/index",
          url: "https://cloud-wave.cn",
          appid: "wx9014a851767a3d44",
          key: "V1001_TODAY_MINI"
        },
        // {
        //   type: "view",
        //   name: "技术沙龙",
        //   url: "https://cloud-wave.cn/agora",
        //   key: "V1001_TODAY_AGORA"
        // },
        {
          name: "技术沙龙",
          sub_button: [
            {
              type: "view",
              name: "日常博客",
              url: "https://cloud-wave.cn/agora"
            },
            {
              type: "view",
              name: "Redux中文文档",
              url: "https://cloud-wave.cn/redux/docs/introduction/getting_started"
            },
            {
              type: "view",
              name: "React源码解析",
              url: "https://cloud-wave.cn/react-source/docs/introduction/getting_started"
            },
            {
              type: "view",
              name: "JS高级编程与算法",
              url: "https://cloud-wave.cn/algorithm/docs/introduction/getting_started"
            }
          ]
        }]
    };

    const URL = `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${ACCESS_TOKEN}`;
    const wechatServer = await fetch(URL, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    });
    const back = await wechatServer.json();
    console.log(back);
  } catch (e) {
    throw new Error(e.toString());
  }
}

Get();
process.on("uncaughtException", (err) => {
  console.log(err);
});

module.exports = server;
