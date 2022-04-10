const fs = require('fs')
const AipOcrClient = require("baidu-aip-sdk").ocr;
const config = require('./config')

// 新建一个对象，建议只保存一个对象调用服务接口
const client = new AipOcrClient(config.appId, config.apiKey, config.secretKey);
const image = fs.readFileSync("./assets/3.png").toString("base64");

// 调用通用文字识别, 图片参数为本地图片
client.generalBasic(image).then(function(result) {
    const str = result.words_result.reduce((final, item) => final + '😊' + item.words, '')
    console.log(str);
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});
