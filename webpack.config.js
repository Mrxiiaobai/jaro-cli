const path = require("path");
const webpack = require("webpack");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");

module.exports = {
  mode: "production",

  target: "node",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "bin"),
    filename: "cli.js",
  },
  resolve: {
    extensions: [".ts", ".js"], // 自动解析的扩展名
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "#!/usr/bin/env node", // 添加 shebang 行
      raw: true, // 以原始字符串形式添加
    }),
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ["chmod +x bin/cli.js"], // 确保打包后的文件具有可执行权限
        blocking: false,
        parallel: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/, // 匹配 TypeScript 文件
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
