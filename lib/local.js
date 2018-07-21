module.exports.command = 'local'

module.exports.describe = '运行本机Fastest命令。'

module.exports.builder = function (yargs) {
  return yargs
    .env('FASTEST_LOCAL')
    .strict()
    .option('cmd', {
      describe: '本机命令',
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
  var child_process = require('child_process');
  var cmd = child_process.spawn(argv.cmd, argv._);
  cmd.stdout.on("data", function (data) {
    console.log(`${data}`);
  });
}