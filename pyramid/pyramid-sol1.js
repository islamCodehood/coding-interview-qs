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
  for (let row = 1; row <= n; row++) {
    let level = "";
    for (let col = 1; col <= 2 * n - 1; col++) {
      if (n - row < col && col - row < n) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}
