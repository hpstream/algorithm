export class BruteForce02 {
  static indexOf(text: string, pattern: string) {
    let textChars = text;
    let patternChars = pattern;
    let tlen = textChars.length;
    if (tlen == 0) return -1;
    let plen = patternChars.length;
    if (plen === 0) return -1;

    let tiMax = tlen - plen;
    for (let ti = 0; ti <= tiMax; ti++) {
      let pi = 0;
      for (pi = 0; pi < plen; pi++) {
        if (textChars[ti + pi] != patternChars[pi]) break;
      }
      if (pi == plen) {
        return ti;
      }
    }

    return -1;
  }
}
