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

    this.bits = new Array((this.bitSize + this.long - 1) / this.long);
    // console.log(this.bitSize, this.hashSize);
  }

  public put(value: T) {
    // let s = value
  }
}
