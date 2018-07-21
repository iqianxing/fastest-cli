# fastest-cli
A tool for runing remote server tests, build test data.

# 使用介绍
```
git clone https://github.com/iqianxing/fastest-cli.git
cd fastest-cli/
npm install 
npm link
fastest
```

# 命令介绍
1.  fastest config  获取远程服务器Fastest命令。
2.  fastest remote  运行远程服务器Fastest命令。
3.  fastest local   运行本机Fastest命令。
# fastest config
获取远程服务器Fastest命令。

示例配置：  
``` json
[
  {
    "command": "hello",
    "description": "hello, world!",
    "options": {
      "world": {
        "description": "hello, <user>",
        "type": "string",
        "demand": true,
        "default": "world"
      }
    }
  },
  {
    "command": "foo",
    "description": "foo bar!",
    "options": {
      "bar": {
        "description": "foo, <bar>",
        "type": "string",
        "demand": true
      }
    }
  }
]
```

