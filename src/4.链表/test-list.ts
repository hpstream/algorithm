import {LinkList} from "./LinkList";

let link = new LinkList();
let arr = [];
let count = 100000;

for (let i = 0; i < count; i++) {
  link.add(i);
  arr.push(i);
}

Test("LinkList", () => {
  for (let i = 0; i < count; i++) {
    link.add(0, 1);
  }
});
Test("jsArr", () => {
  for (let i = 0; i < count; i++) {
    arr.unshift(-10);
  }
});

export function Test(title: string, cb: Function) {
  console.log(`[${title}]`);

  let begin = new Date().getTime();
  console.log(`开始：${new Date().toString()}`);
  cb && cb();
  let end = new Date().getTime();
  let delta = (end - begin) / 1000;
  console.log(`结束：${new Date().toString()}`);
  console.log("耗时：" + delta + "秒");
  console.log("-------------------------------------");
}
