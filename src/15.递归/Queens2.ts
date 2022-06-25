/**
 * [EightQueens 八皇后问题]
 *
 * @return  {[type]}  [return description]
 */
// 标记某一列是否有皇后
let cols: number;
let queens: number[];
let leftTop: number;
let rightTop: number;
let ways = 0;
let count = 0;
export function placeQueens(n: number) {
  if (n < 1) return;
  cols = 0;
  queens = new Array(n);
  leftTop = 0;
  rightTop = 0;
  count = n;
  ways = 0;
  place(0);

  // console.log(`${n}皇后一共有${ways}中摆法`);
  return ways;
}

/**
 * [place 从第row行摆放皇后]
 *
 * @param   {number}  row  [row description]
 *
 * @return  {[type]}       [return description]
 */
function place(row: number) {
  if (row === count) {
    ways++;
    return;
  }
  for (let col = 0; col < count; col++) {
    // 获取当前行能后摆放的位置
    let cv = 1 << col;
    if ((cols & cv) != 0) continue;
    let lv = 1 << (row - col + 7);
    if ((leftTop & lv) != 0) continue;
    let rv = 1 << (row + col);
    if ((rightTop & rv) != 0) continue;

    queens[row] = col;
    // 第row行第col列，摆放皇后
    cols |= cv;
    leftTop |= lv;
    rightTop |= rv;
    place(row + 1);
    // cols = cols - cv;
    // leftTop = leftTop - lv;
    // rightTop = rightTop - rv;
    cols &= ~cv;
    leftTop &= ~lv;
    rightTop &= ~rv;
  }
}

function show() {
  for (let i = 0; i < queens.length; i++) {
    let tem = [];
    for (let j = 0; j < queens.length; j++) {
      // console.log(cols[i]);
      if (queens[i] === j) {
        tem.push("Q");
      } else {
        tem.push(".");
      }
    }
    console.log(`[${tem.join("")}]`);
  }
  console.log(`\n-----------`);
}
