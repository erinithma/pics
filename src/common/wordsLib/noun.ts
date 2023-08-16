type Rod = "m" | "f" | "n";

export class Noun {
  static detectType(word: string, rod: Rod) {
    if ((rod === "m" || rod === "f") && /[ая]$/i.test(word)) {
      return 1;
    }
    if (
      (rod === "m" && /[^ая]$/i.test(word)) ||
      (rod === "n" && /[ое]$/i.test(word))
    ) {
      return 2;
    }
    if (rod === "f" && /[^еоая]$/i.test(word)) {
      return 3;
    }
    return 0;
  }

  static generate(word: string, type: number) {
    if (type === 1) {
      const w = word.replace(/^(.+)[ая]$/, "$1");
      if (/я$/i.test(word)) {
        return [word, `${w}и`, `${w}и`, `${w}ю`, `${w}ей`, `${w}и`];
      } else {
        return [word, `${w}ы`, `${w}е`, `${w}у`, `${w}ой`, `${w}е`];
      }
    } else if (type === 2) {
      const w = word.replace(/^(.+)[ьйое]$/, "$1");
      if (/йье$/i.test(word)) {
        return [word, `${w}я`, `${w}ю`, word, `${w}ем`, `${w}е`];
      } else {
        return [word, `${w}а`, `${w}у`, word, `${w}ом`, `${w}е`];
      }
    } else if (type === 3) {
      const w = word.replace(/^(.+)ь$/, "$1");
      return [word, `${w}и`, `${w}и`, word, `${word}ю`, `${w}и`];
    } else {
      return [word, word, word, word, word, word];
    }
  }
}
