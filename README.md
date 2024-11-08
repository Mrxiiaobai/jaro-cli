# 使用须知

# 安装

```bash
yarn global add @maloulab/cli
```

或

```bash
npm i @maloulab/cli -g
```

# 使用前

mac、windows 微信开发者工具先打开设置-安全设置-服务端口 开启开关

# 使用

默认配置
mac 微信开发工具 devTools 路径：/Applications/wechatwebdevtools.app/Contents/MacOS/cli
windows 微信开发工具 devTools 路径：C:/Program Files (x86)/Tencent/微信 web 开发者工具/cli.bat
自动打开当前项目的文件夹：dist

没有配置的情况下，运行 weapp open，将自动打开微信开发者工具，并选中 dist 文件夹。

# 配置

项目下创建.malou.config.js 或.malou.config.json

例.malou.config.js

```js
module.exports = {
  // 微信开发工具 devTools 路径
  devToolsPath: "/Applications/wechatwebdevtools.app/Contents/MacOS/cli",
  // 小程序appId
  appId: "appId",
  // 需要打开的文件夹名称，当前项目下的fileName
  fileName: "dist",
  // 文件夹目录,配置后fileName无效
  filePath: " /Users/admin/Documents/work_space/malou-cli/dist",
};
```
