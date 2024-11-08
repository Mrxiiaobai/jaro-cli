export function isJsonFormat(content: string): boolean {
  try {
    JSON.parse(content); // 尝试解析文件内容
    return true; // 如果解析成功，返回 true
  } catch (error) {
    return false; // 如果解析失败，返回 false
  }
}
