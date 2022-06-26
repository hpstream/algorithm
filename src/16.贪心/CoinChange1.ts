let faces = [25, 10, 5, 1].sort((a, b) => a - b);
let money = 41;
let coins = 0;
let coinsArr = [];

for (let i = faces.length - 1; i >= 0; i--) {
  // const element = faces[i];
  if (money < faces[i]) {
    continue;
  } else {
    while (money >= faces[i]) {
      money -= faces[i];
      coins++;
      coinsArr.push(faces[i]);
    }
  }
}
console.log(`硬币数量${coins},硬币:${coinsArr}`);

export {};
