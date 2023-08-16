export function countWord(word: string): {
  word: string;
  udar: number;
  slogs: number;
} {
  let index = word.replace(/[^\\*ёуеыаоэяию]/gu, "").indexOf("*");
  if (index === -1) {
    index = 0;
  }

  return {
    word: word.replace("*", ""),
    udar: index + 1,
    slogs: word.replace(/[^ёуеыаоэяию]/gu, "").length,
  };
}
