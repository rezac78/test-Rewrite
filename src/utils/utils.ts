export function isValidJsonString(str: string): boolean {
  const bracesAreBalanced = str.split("{").length === str.split("}").length;
  const quotesAreBalanced = (str.match(/"/g) || []).length % 2 === 0;
  if (!bracesAreBalanced || !quotesAreBalanced) {
    return false;
  }
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
