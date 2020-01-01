/*Write a function to return the maximum number in an array of numbers.
*For example: findMaxNum([100, 2, 3, 2, 50]) should return 100
*/

//First solution
function findMaxNum(arr) {
  var len = arr.length;
  var maxNum = 0;
  while (len--) {
    if (arr[len] > maxNum) {
      maxNum = arr[len];
    }
  }
  console.log(maxNum)
  return maxNum;
}

/*********************************************************/

//Second solution
function findMaxNum(arr) {
    console.log(Math.max.apply(null, arr));
    return Math.max.apply(null, arr)
}

findMaxNum([100,200,5])