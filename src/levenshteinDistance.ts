/**
 * Levenshtein distance
 * @param a first string
 * @param b second string
 * @returns The distance between two strings.
 * @link https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
 */

export function levenshteinDistance(a: string, b: string): number {
  const lengthA = a.length;
  const lengthB = b.length;
  if (lengthA === 0) return lengthB;
  if (lengthB === 0) return lengthA;
  if (a === b) return 0;

  let pRow = new Array<number>(lengthA + 1);
  let cRow = new Array<number>(lengthA + 1);
  for (let i = 0; i <= lengthA; i++) {
    pRow[i] = i;
  }

  for (let i = 1; i <= lengthB; i++) {
    const bChar = b[i - 1];
    cRow[0] = i;

    for (let j = 1; j <= lengthA; j++) {
      if (bChar === a[j - 1]) {
        cRow[j] = pRow[j - 1];
      } else {
        cRow[j] = 1 + Math.min(pRow[j], cRow[j - 1], pRow[j - 1]);
      }
    }

    [pRow, cRow] = [cRow, pRow];
  }

  return pRow[lengthA];
}
