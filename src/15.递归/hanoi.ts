/**
 * [hanoi 汉诺塔]
 *
 * @return  {[type]}  [return description]
 */
function hanoi(n: number, p1: string, p2: string, p3: string) {
  if (n == 1) {
    move(n, p1, p3);
    return;
  }
  hanoi(n - 1, p1, p3, p2);
  move(n, p1, p3);
  hanoi(n - 1, p2, p1, p3);
}

function move(i: number, p1: string, p2: string) {
  console.log(`将${i}盘子，从${p1}移动到${p2}`);
}

hanoi(3, "a", "b", "c");
