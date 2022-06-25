/**
 * [EightQueens 八皇后问题]
 *
 * @return  {[type]}  [return description]
 */
// 标记某一列是否有皇后
let cols: boolean[];
let queens: number[];
let leftTop: boolean[];
let rightTop: boolean[];
let ways = 0;
export function placeQueens(n: number) {
  if (n < 1) return;
  cols = new Array(n);
  queens = new Array(n);
  leftTop = new Array((n << 1) - 1);
  rightTop = new Array((n << 1) - 1);
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
  if (row === cols.length) {
    // console.log(row, cols.length);
    ways++;
    show();
    return;
  }
  for (let col = 0; col < cols.length; col++) {
    // 获取当前行能后摆放的位置

    if (cols[col]) continue;
    let ltIndex = row - col + cols.length - 1;
    if (leftTop[ltIndex]) continue;
    let rtIndex = row + col;
    if (rightTop[rtIndex]) continue;

    queens[row] = col;
    // 第row行第col列，摆放皇后
    cols[col] = true;
    leftTop[ltIndex] = true;
    rightTop[rtIndex] = true;
    place(row + 1);
    cols[col] = false;
    leftTop[ltIndex] = false;
    rightTop[rtIndex] = false;
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
