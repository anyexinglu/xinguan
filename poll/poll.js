const request = require('request');
const user = require('./config.js')

const options = {
  'method': 'POST',
  'url': 'https://h5.wdjky.com/gw/nad-biz-register-queryReportEncrypted',
  'headers': {
    'Host': 'h5.wdjky.com',
    'Accept': 'text/plain, */*; q=0.01',
    'timestamp': '1649246094410',
    'X-Requested-With': 'XMLHttpRequest',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'token': user.token,
    'lightAppCode': '10000',
    'Origin': 'https://h5.wdjky.com',
    'channelCode': '10039',
    // 'User-Agent': '非必需',
    // 'Referer': '非必需',
    'Content-Type': 'application/json; charset=utf-8',
    // 'request-id': '非必需'
  },
  body: `{"accountId":"${user.accountId}","publicKey":"${user.publicKey}"}`
};

function update() {
    request(options, function (error, response) {
        if (error) throw new Error(error);
        const body = JSON.parse(response.body)
        const natResult = body.data[0].natResult
        console.log(natResult);
    });
}

setInterval(() => {
    update()
},  5 * 60 * 1000) // 五分钟一次，不能频繁毕竟是gj接口
