var yargs = require('yargs');
var commands = require('./commands');

yargs.usage('用法: $0 <命令> [选项]').strict();

commands.forEach(command => {
  yargs.command(command.command, command.description, command.options)
});

yargs
  .command(require('./config'))
  .command(require('./remote'))
  .command(require('./local'))
  .demand(1).help().locale("zh_CN")
  .argv;