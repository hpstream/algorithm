import { Test } from "./utils/times";

// 时间复杂度O(2^n):空间复杂度O(n)
function fib0(n: number): number {
  if (n <= 2) return 1;
  return fib0(n - 1) + fib0(n - 2);
}

// 时间复杂度O(n):空间复杂度O(n)
function fib1(n: number): number {
  if (n <= 2) return 1;
  let array = [0, 1, 1];

  return fib11(n, array);

  function fib11(n: number, array: number[]) {
    if (!array[n]) {
      //自顶向下计算
      array[n] = fib11(n - 1, array) + fib11(n - 2, array);
    }
    return array[n];
  }
}

// 时间复杂度O(n):空间复杂度O(n)
function fib2(n: number): number {
  if (n <= 2) return 1;
  let array = [0, 1, 1];

  for (let i = 3; i <=n; i++) {
    //自底向上计算
    array[i] = array[i-1] + array[i-2];
  }
  return array[n]
}

// 时间复杂度O(n):空间复杂度O(1)
function fib3(n: number): number {
  if (n <= 2) return 1;
 
  let first = 1;
  let second = 1;
  for (let i = 3; i <=n; i++) {
    // 滚动数组
    let tem = second + first;
    first = second ;
    second = tem;
   
  }
  return second;
}
let count = 420000;

// Test("fib0",()=>{
// console.log(fib0(count));
// });
// Test("fib1", () => {
//  console.log(fib1(count));
// });
Test("fib2", () => {
  console.log(fib2(count));
});

Test("fib3", () => {
  console.log(fib3(count));
});


