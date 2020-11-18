// 填入你的微信H5的ID
const APP_ID = "xxxx";
async function executeSdk(currentUrl) {
  // 调用你自己服务器上微信SDK Ticket的接口
  // let server = await fetch("/api/getJsSdkTicket", {
  //   method: "POST",
  //   credentials: "include",
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ currentUrl })
  // });
  // let sign = await server.json();
  // wx.config({
  //   debug: false,
  //   appId: APP_ID,
  //   timestamp: sign.timestamp,
  //   nonceStr: sign.nonceStr,
  //   signature: sign.signature,
  //   jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData']
  // });
}

export default executeSdk;