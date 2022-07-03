// 最好时间复杂度 O(m)
// 最坏时间复杂度 O(n),不超过O(2n)
// 空间复杂O(m)
export class KMP {
  static next(pattern: string) {
    // 找真前缀，找真后缀
    let chars = pattern;
    let next: number[] = new Array(chars.length);

    let i = 0;
    next[0] = -1;
    let n = -1;
    let iMax = chars.length - 1;
    while (i < iMax) {
      if (n < 0 || chars[i] == chars[n]) {
        ++i;
        ++n;
        if (chars[i] == chars[n]) {
          next[i] = next[n];
        } else {
          next[i] = n;
        }
      } else {
        n = next[n];
      }
    }
    return next;
  }
  static next1(pattern: string) {
    // 找真前缀，找真后缀
    let chars = pattern;
    let next: number[] = new Array(chars.length);

    let i = 0;
    next[0] = -1;
    let n = -1;
    let iMax = chars.length - 1;
    while (i < iMax) {
      if (n < 0 || chars[i] == chars[n]) {
        next[++i] = ++n;
      } else {
        n = next[n];
      }
    }
    return next;
  }
  static indexOf(text: string, pattern: string) {
    let textChars = text;
    let patternChars = pattern;
    let tlen = textChars.length;
    if (tlen == 0) return -1;
    let plen = patternChars.length;
    if (plen === 0) return -1;

    let next = KMP.next(patternChars);
    let pi = 0,
      ti = 0,
      lenDelta = tlen - plen;
    while (pi < plen && ti - pi <= lenDelta) {
      if (pi < 0 || textChars[ti] == patternChars[pi]) {
        ti++;
        pi++;
      } else {
        pi = next[pi];
      }
    }

    return pi == plen ? ti - pi : -1;
  }
  static indexOf2(text: string, pattern: string) {
    let textChars = text;
    let patternChars = pattern;
    let tlen = textChars.length;
    if (tlen == 0) return -1;
    let plen = patternChars.length;
    if (plen === 0) return -1;

    let pi = 0,
      ti = 0;
    while (pi < plen && ti - pi <= tlen - plen) {
      if (textChars[ti] == patternChars[pi]) {
        ti++;
        pi++;
      } else {
        ti -= pi - 1;
        pi = 0;
      }
    }

    return pi == plen ? ti - pi : -1;
  }
}
