let faces = [25, 20, 5, 1].sort((a, b) => b - a);
let money = 41;
let coins = 0;
let coinsArr = [];
let i = 0;
while (i < faces.length) {
  if (money < faces[i]) {
    i++;
    continue;
  }
  money -= faces[i];
  coins++;
  coinsArr.push(faces[i]);
}
console.log(`硬币数量${coins},硬币:${coinsArr}`);

export {};
