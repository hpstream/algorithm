/**
 * [EightQueens 八皇后问题]
 *
 * @return  {[type]}  [return description]
 */
let cols: any[];
let ways = 0;
export function placeQueens(n: number) {
  if (n < 1) return;
  cols = new Array(n);
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
    ways++;
    show();
    return;
  }
  for (let col = 0; col < cols.length; col++) {
    // 获取当前行能后摆放的位置
    if (isValid(row, col)) {
      // 第row行第col列，摆放皇后
      cols[row] = col;
      place(row + 1);
    }
  }
}
/**
 * [isValid 判断第row行，和第col列是否可以摆放]
 *
 * @param   {number}  row  [row description]
 * @param   {number}  col  [col description]
 *
 * @return  {[type]}       [return description]
 */
function isValid(row: number, col: number): boolean {
  for (let i = 0; i < row; i++) {
    let queensPost = cols[i];
    // 第col列已经有皇后
    if (queensPost == col) return false;
    // 判断斜线有没有皇后
    if (row - i == Math.abs(col - cols[i])) return false;
  }
  return true;
}

function show() {
  for (let i = 0; i < cols.length; i++) {
    let tem = [];
    for (let j = 0; j < cols.length; j++) {
      // console.log(cols[i]);
      if (cols[i] === j) {
        tem.push("Q");
      } else {
        tem.push(".");
      }
    }
    console.log(`[${tem.join("")}]`);
  }
  console.log(`\n-----------`);
}
