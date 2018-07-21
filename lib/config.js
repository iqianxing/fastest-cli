module.exports.command = 'config'

module.exports.describe = '获取远程服务器Fastest命令。'

module.exports.builder = function (yargs) {
  return yargs
    .env('FASTEST_CONFIG')
    .strict()
    .option('api', {
      describe: 'Fastest配置的API',
      type: 'string',
      demand: true,
    })
    .option('proxy', {
      describe: '代理服务器配置',
      type: 'string',
      demand: false
    })
    .option('cmd', {
      describe: '远程服务器命令',
      type: 'string',
      demand: false
    })
    .option('user', {
      describe: 'Fastest登录用户名',
      type: 'string',
      demand: false
    })
    .option('password', {
      describe: 'Fastest登录密码',
      type: 'string',
      demand: false
    })
}

module.exports.handler = function (argv) {
  var request = require("request");
  request.post(argv.api, {
      proxy: argv.proxy || false,
      json: true,
    },
    function (error, response, body) {
      error && console.error(error);
      if (!(body instanceof Array) || body === null) {
        console.log("获取远程命令失败。\n接口返回：\n", body)
        return;
      }
      var fs = require("fs");
      fs.writeFile("./remote/config.json", JSON.stringify(body), function (err) {
        body && console.log("获取远程命令成功。");
        process.exit(1);
      })
    });
}