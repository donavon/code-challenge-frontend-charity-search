/** Parses a string into a number. Returns undefined if the string is not a number. */
export const parseNumber = (str?: string | null) => {
  if (!str) return undefined;
  const maybeNum = Number(str);
  return Number.isNaN(maybeNum) ? undefined : maybeNum;
};
