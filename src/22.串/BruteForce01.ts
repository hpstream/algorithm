export class BruteForce01 {
  static indexOf(text: string, pattern: string) {
    let textChars = text;
    let patternChars = pattern;
    let tlen = textChars.length;
    if (tlen == 0) return -1;
    let plen = patternChars.length;
    if (plen === 0) return -1;

    let pi = 0,
      ti = 0,
      lenDelta = tlen - plen;
    while (pi < plen && ti - pi <= lenDelta) {
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
