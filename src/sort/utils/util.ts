// 生成随机数组
export function random(count: number, min: number, max: number) {
  if (count <= 0 || min > max) return [];
  let array = [];
  let delta = max - min + 1;
  for (let i = 0; i < count; i++) {
    array[i] = min + Math.round(Math.random() * delta);
  }
  return array;
}
// 合并两个数组
export function combine(array1: number[], array2: number[]) {
  if (array1 == null || array2 == null) return null;
  let array = [];
  for (let i = 0; i < array1.length; i++) {
    array[i] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    array[i + array1.length] = array2[i];
  }
  return array;
}

// [3, 2, 1, 0, 2, 3, ];
export function same(count: number, unsameCount: number) {
  if (count <= 0 || unsameCount > count) return null;
  let array = [];
  for (let i = 0; i < unsameCount; i++) {
    array[i] = unsameCount - i;
  }
  for (let i = unsameCount; i < count; i++) {
    array[i] = unsameCount + 1;
  }
  return array;
}

export function headTailAscOrder(
  min: number,
  max: number,
  disorderCount: number
) {
  let array = ascOrder(min, max);
  if (disorderCount > array.length) return array;

  let begin = (array.length - disorderCount) >> 1;
  reverse(array, begin, begin + disorderCount);
  return array;
}

export function centerAscOrder(
  min: number,
  max: number,
  disorderCount: number
) {
  let array = ascOrder(min, max);
  if (disorderCount > array.length) return array;
  let left = disorderCount >> 1;
  reverse(array, 0, left);

  let right = disorderCount - left;
  reverse(array, array.length - right, array.length);
  return array;
}

export function headAscOrder(min: number, max: number, disorderCount: number) {
  let array = ascOrder(min, max);
  if (disorderCount > array.length) return array;
  reverse(array, array.length - disorderCount, array.length);
  return array;
}

export function tailAscOrder(min: number, max: number, disorderCount: number) {
  let array = ascOrder(min, max);
  if (disorderCount > array.length) return array;
  reverse(array, 0, disorderCount);
  return array;
}

export function ascOrder(min: number, max: number) {
  if (min > max) return [];
  let array = [];
  for (let i = 0; i < array.length; i++) {
    array[i] = min++;
  }
  return array;
}

export function descOrder(min: number, max: number) {
  if (min > max) return null;
  let array = [];
  for (let i = 0; i < array.length; i++) {
    array[i] = max--;
  }
  return array;
}

export function reverse(array: number[], begin: number, end: number) {
  let count = (end - begin) >> 1;
  let sum = begin + end - 1;
  for (let i = begin; i < begin + count; i++) {
    let j = sum - i;
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
}

export function copy(array: number[]) {
  return [...array];
}

export function isAscOrder(array: number[]) {
  if (array == null || array.length == 0) return false;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) return false;
  }
  return true;
}

export function println(array: number[]) {
  if (array == null) return;
  return array.join("_");
}
