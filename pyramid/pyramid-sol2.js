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

function pyramid(n, row = 1, stair = "") {
  if (row > n) {
    return;
  }
  if (stair.length === 2 * n - 1) {
    console.log(stair);
    return pyramid(n, row + 1);
  }

  let add;
  if (n - row < stair.length + 1 && n + row > stair.length + 1) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, stair + add);
}