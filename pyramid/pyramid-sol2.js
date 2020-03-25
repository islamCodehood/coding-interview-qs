/*Write a function that takes a number argument, and
 *prints a pyramid shape with n levels using the #
 *character like in these examples:
 *pyramid(1) '#'
 *
 *pyramid(2) ' # '
 *           '###'
 *
 *pyramid(3) '  #  '
 *           ' ### '
 *           '#####'
 */

function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const midPoint = Math.floor((2 * n - 1) / 2);
  if (midPoint + row >= level.length && midPoint - row <= level.length) {
    level += "#";
  } else {
    level += " ";
  }
  pyramid(n, row, level)
}
pyramid(3)
