import globalConfig from "../config";
const { exec } = require("child_process");

export function openWeapp({
  wechatDevToolsPath,
  projectPath,
  appId,
}: {
  wechatDevToolsPath: string;
  projectPath: string;
  appId?: string;
}) {
  let execCmd = `${wechatDevToolsPath} open --project ${projectPath}`;
  if (appId) execCmd += ` --appId ${appId}`;
  exec(execCmd, (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.error(`${globalConfig.logPrefix}: 打开失败: ${error}`);
      return;
    }
    console.log(
      globalConfig.successColor,
      `${globalConfig.logPrefix}: success, appId：${appId}`
    );
    console.log(
      globalConfig.successColor,
      `${globalConfig.logPrefix}: success, wechatDevToolsPath：${wechatDevToolsPath}`
    );
    console.log(
      globalConfig.successColor,
      `${globalConfig.logPrefix}: success, projectPath${projectPath}`
    );
  });
}
