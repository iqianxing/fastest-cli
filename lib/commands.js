var config = [];

try {
  config = require('../remote/config.json');
} catch (e) {
  console.warn("未找到配置文件！")
}

module.exports = config || [];