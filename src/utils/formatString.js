/**
 * The `formatString` function takes a string `content` and an optional number `number`, and returns a
 * formatted string that is truncated to `number` characters if it exceeds that length.
 * @param content - The `content` parameter is a string that represents the content that needs to be
 * formatted.
 * @param [number=70] - The `number` parameter in the `formatString` function is an optional parameter
 * that specifies the maximum length of the string. If the `content` string is longer than the `number`
 * value, it will be truncated and appended with ellipsis (`...`). If the `content` string is shorter
 * @returns The function `formatString` returns a formatted string. If the length of the `content` is
 * greater than the `number` parameter (default value is 70), it returns a substring of `content` from
 * index 0 to `number` followed by three dots (...). Otherwise, it returns the original `content`
 * string.
 */
const formatString = (content, number = 70) => {
  return content.length > number ? `${content.substr(0, number)}...` : content;
};

export { formatString };
