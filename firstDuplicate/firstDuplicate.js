/*Write a function that takes an argument of an array of
 *numbers and returns the first duplicate.
 *Example: findFirstDupl([2, 4, 5, 1, 3, 5, 4]) returns 4
 */

function findFirstDupl(arr) {
  let numMap = {};
  for (const num of arr) {
    if (!numMap[num]) {
      numMap[num] = 1;
    } else {
      numMap[num]++;
    }
  }
  for (const num in numMap) {
    if (numMap[num] === 2) {
      console.log(num);
      return num;
    }
  }
}
