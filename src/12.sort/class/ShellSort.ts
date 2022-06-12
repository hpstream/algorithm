import {Sort} from "./Sort";
export class ShellSort<E> extends Sort<E> {
  stepSequence: number[] = [];
  sort(...args: [] | [step: number]) {
    if (args.length == 0) {
      // this.stepSequence = this.shellStepSequence();
      this.stepSequence = this.sedgewickStepSequence();
      // console.log(this.stepSequence);
      for (let i = 0; i < this.stepSequence.length; i++) {
        this.sort(this.stepSequence[i]);
      }
    } else {
      let [step] = args;
      let array = this.array;
      for (let col = 0; col < step; col++) {
        for (let begin = col + step; begin < array.length; begin += step) {
          let cur = begin;
          while (cur > col && this.cmp(cur, cur - step) < 0) {
            this.swap(cur, cur - step);
            cur -= step;
          }
        }
      }
    }
  }
  shellStepSequence() {
    let stepSequence: number[] = [];
    let step = this.array.length;
    while ((step >>= 1) > 0) {
      stepSequence.push(step);
    }
    return stepSequence;
  }

  sedgewickStepSequence() {
    let stepSequence: number[] = [];
    let k = 0,
      step = 0;
    while (true) {
      if (k % 2 == 0) {
        let pow = Math.floor(Math.pow(2, k >> 1));
        step = 1 + 9 * (pow * pow - pow);
      } else {
        let pow1 = Math.floor(Math.pow(2, (k - 1) >> 1));
        let pow2 = Math.floor(Math.pow(2, (k + 1) >> 1));
        step = 1 + 8 * pow1 * pow2 - 6 * pow2;
      }
      if (step >= this.array.length) break;
      stepSequence.unshift(step);
      k++;
    }
    return stepSequence;
  }
}
