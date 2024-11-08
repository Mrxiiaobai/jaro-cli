import * as fs from "fs";
import * as path from "path";
import globalConfig from "../config";
import { isJsonFormat } from "../util/isJson";

interface weappConfig {
  appId?: string;
  devToolsPath?: string;
  filePath?: string;
  fileName?: string;
}

const {
  defaultWinWxevToolsPath,
  defaultMacWxevToolsPath,
  fileAfterfix,
  defaultFileName,
  logPrefix,
} = globalConfig;

const isWindows = process.platform === "win32";

const defaultDevToolsPath = isWindows
  ? defaultWinWxevToolsPath
  : defaultMacWxevToolsPath;

const readFielName = ".malou.config";

export function getWeappConfiguration() {
  const configPath = path.resolve(process.cwd(), readFielName); // 获取项目根目录下的 .weapp 文件路径

  const defaultConfig = {
    appId: "",
    devToolsPath: defaultDevToolsPath,
    filePath: path.resolve(process.cwd(), defaultFileName),
  };

  const fileExist = fileAfterfix.every((item) => {
    return !fs.existsSync(
      path.resolve(process.cwd(), `${readFielName}.${item}`)
    );
  });

  console.log("-------.malou.config配置读取中----------");
  if (!fileExist) {
    console.log("未发现.malou.config配置文件，使用默认配置");
    return defaultConfig;
  }

  try {
    const configFile = fs.readFileSync(configPath, "utf-8"); // 读取文件
    console.log("读取完成，正在打开");
    const isJson = isJsonFormat(configFile);
    let config: weappConfig = {};
    if (isJson) {
      config = JSON.parse(configFile);
    }
    config = require(configPath);

    let devToolsPath = config?.devToolsPath || defaultDevToolsPath;

    // 获取配置项中的 appid（假设存在）
    let appId = config?.appId || "";
    const fileName = config?.appId || defaultFileName;
    const filePath = config?.filePath || path.resolve(process.cwd(), fileName);

    // 返回读取的配置项
    return {
      appId,
      devToolsPath,
      filePath,
    };
  } catch (error) {
    console.log(`${logPrefix}: 读取${readFielName} 文件报错:", error`);
    return defaultConfig;
  }
}
