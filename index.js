const fs = require("fs");
const path = require("path");
// 读取某个目录下的文件名称

function readDir(path) {
  let res = fs.readdirSync(path);

  console.log(res);
}

readDir(path.join(".leetcode/链表"));
