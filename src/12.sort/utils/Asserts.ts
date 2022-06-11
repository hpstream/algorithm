export function test(value: boolean): void {
  if (!value) throw new Error("测试未通过");
}

let Asserts = {test};

export default Asserts;
