module.exports.command = 'remote'

module.exports.describe = '运行远程服务器Fastest命令。'

module.exports.builder = function (yargs) {
  return yargs
    .env('FASTEST_REMOTE')
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
      demand: true
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
  console.log("命令参数：",JSON.stringify(argv));

  var request = require("request");
  request.post(argv.api, {
      body: {
        cmd: argv.cmd,
        args: argv._.splice(1),
      },
      proxy: argv.proxy || false,
      json: true,
    },
    function (error, response, body) {
      error && console.error(error);
      body && console.log("命令执行结果：",JSON.stringify(body));
    });
}