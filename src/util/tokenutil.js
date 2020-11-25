const cryptoJs = require('crypto-js');

const {getTimespamp} = require('./dateutil');

/**
 * 效验指纹，手势，人脸token是否过期
 * @author 孟庆云
 *  */
function verifyToken(token) {
  console.log('效验保存的指纹，手势，人脸token是否过期:', token);
  if (token) {
    let payload = token.split('.')[1];
    var parsedWordArray = cryptoJs.enc.Base64.parse(payload);
    var parsedStr = parsedWordArray.toString(cryptoJs.enc.Utf8);
    let payloadJson = JSON.parse(parsedStr);
    return getTimespamp(new Date()) < payloadJson.exp * 1000;
  } else {
    return false;
  }
}

/**
 * 校验登录Token使用情况
 * @return 0-已超时
 * @return 1-已使用小于1分钟
 * @return 2-已使用大于1分钟
 * @return 3-不存在token
 * @author 孟庆云
 *  */
function verifyLoginTokenUsage(token) {
  // console.log('效验登录token使用时间:', token);
  if (token) {
    let payload = token.split('.')[1];
    var parsedWordArray = cryptoJs.enc.Base64.parse(payload);
    var parsedStr = parsedWordArray.toString(cryptoJs.enc.Utf8);
    let payloadJson = JSON.parse(parsedStr);
    const currentTime = getTimespamp(new Date());
    //当前token剩余有效时间
     let tokenTimeOut = (payloadJson.exp * 1000) - currentTime;
    let tokenRemainTime =(currentTime-payloadJson.iat * 1000);
    //判断是否过期
    console.log("token剩余时间",tokenTimeOut)
    console.log("token已使用时间",tokenRemainTime)
    if (tokenTimeOut <= 0) {
      console.log("登录超时");
      return 0;
    } else if (tokenRemainTime > 60000) {
      console.log("当前token使用时间大于1分钟");
      return 2;
    } else {
      console.log("当前token使用时间小于1分钟");
      return 1;
    }
  } else {
    console.log("Token不存在")
    return 3;
  }
}

/**
 * 校验登录Token使用情况
 * @return 0-已超时
 * @return 1-已使用小于1分钟
 * @return 2-已使用大于1分钟
 * @return 3-不存在token
 * @author 刘晓斌
 *  */
// function verifyLoginTokenUsage(token) {
//   // console.log('效验登录token使用时间:', token);
//   if (token) {
//     if(window.backgroundTime != ''){
//       var timeEnd = (window.activeTime - window.backgroundTime)/1000;
//       if(timeEnd >= 180||timeEnd<= -30){
//         console.log("登录超时");
//         window.activeTime = getTimespamp(new Date());
//         window.backgroundTime = getTimespamp(new Date());
//         return 0;
//       }
//     }
 
//   } else {
//     console.log("Token不存在")
//     return 3;
//   }
// }

/**
 * 获取用户登录token
 * @author 刘晓斌
 */
function getLoginToken() {
  // new Promise((resolve, reject) => {
  // 	resolve({
  // 		code: 1,
  // 		data: window.token
  // 	})
  // })
  return {
    code: 1,
    data: window.token,
  };
}

/**
 * 设置用户登录token
 * @author 刘晓斌
 */
function setLoginToken(token) {
  window.token = token;
}

module.exports = {
  getTimespamp,
  verifyToken,
  verifyLoginTokenUsage,
  getLoginToken,
  setLoginToken,
};
