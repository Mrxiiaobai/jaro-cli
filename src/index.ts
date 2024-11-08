import { openWeapp } from "./commands/openWeapp";
import { getWeappConfiguration } from "./util/getConfig";
const { version } = require("../package.json"); // 引入package.json的version字段

const args = process.argv.slice(2);
const command = args[0];

if (command === "open:weapp") {
  const { devToolsPath, filePath, appId } = getWeappConfiguration();
  openWeapp({
    wechatDevToolsPath: devToolsPath || "",
    projectPath: filePath || "",
    appId: appId,
  });
}

if (command === "--version" || command === "-v") {
  console.log(`v${version}`);
  process.exit(0); // 输出版本号后退出
}
