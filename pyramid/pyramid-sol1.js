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

function pyramid(n) {
  const midPoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (midPoint + row >= col && midPoint - row <= col) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}
