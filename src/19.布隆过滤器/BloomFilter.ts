function hashCode(tem: any) {
  let str = JSON.stringify(tem);
  let hash = 0,
    i,
    chr,
    len;
  if (str.length === 0) return hash;
  for (i = 0, len = str.length; i < len; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
export class BloomFilter<T> {
  bitSize!: number;
  hashSize!: number;
  long = 64;
  bits: number[] = []; // 当长整型处理
  /**
   * [constructor description]
   *
   * @param   {number}  n  [数据规模]
   * @param   {number}  p  [误判率，取值范围(0,1)]
   *
   * @return  {[type]}     [return description]
   */
  constructor(n: number, p: number) {
    if (n <= 0 || p <= 0 || p >= 1) {
      throw new Error("wrong n or p");
    }

    let ln2 = Math.log(2);
    this.bitSize = Math.floor(-(n * Math.log(p)) / (ln2 * ln2));
    this.hashSize = Math.floor((this.bitSize * ln2) / n);

    // this.bits = new Array(
    //   Math.floor((this.bitSize + this.long - 1) / this.long)
    // );
    this.bits = [];
    // console.log(this.bitSize, this.hashSize);
  }

  public put(value: T) {
    let hash1 = hashCode(value);
    let arr = [];
    let hash2 = hash1 >>> 16; // 无符号移动
    for (let i = 0; i < this.hashSize; i++) {
      let combineHash = hash1 + i * hash2;
      if (combineHash < 0) {
        combineHash = ~combineHash;
      }
      let index = combineHash & this.bitSize;
      arr.push(index);
      this.set(index);
    }
    console.log(arr);
  }
  contains(value: T) {
    let hash1 = hashCode(value);
    let arr = [];
    let hash2 = hash1 >>> 16; // 无符号移动
    for (let i = 0; i < this.hashSize; i++) {
      let combineHash = hash1 + i * hash2;

      if (combineHash < 0) {
        combineHash = ~combineHash;
      }
      let index = combineHash & this.bitSize;
      arr.push(index);
      if (!this.get(index)) return false;
    }
    console.log(arr);

    return true;
  }
  set(index: number) {
    let value = this.bits[Math.floor(index / this.long)];
    let bitValue = 1 << index % this.long;
    this.bits[Math.floor(index / this.long)] = value | bitValue;
    return (value & bitValue) == 0;
  }
  get(index: number) {
    let value = this.bits[Math.floor(index / this.long)];
    let bitValue = 1 << index % this.long;
    return (value & bitValue) != 0;
  }
}
