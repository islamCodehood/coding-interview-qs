/*Write a function to return missing numbers from an unsorted array
 *of numbers that may contain duplicates. 
 *For example: findMissingNums([5, 3, 2, 8, 5]) should return [4, 6, 7]
 */

 // First solution
function findMissingNums(arr) {
    let missingNums = []
    let subtractResult
    arr.sort((a, b) => a - b)
    for (let x = 0; x < arr.length; x++) {
        subtractResult = arr[x + 1] - arr[x]
        if (subtractResult > 1) {
            for (let y = 1; y < subtractResult; y++) {
                missingNums.push(arr[x] + y)
            }
        }
    }
    console.log(missingNums)
    return missingNums
}
 
/*********************************************************/

//Second Solution
function findMissingNums(arr) {
    let missingNums = []
    arr.sort((a, b) => a - b)
    for (let x = arr[0]; x <= arr[arr.length - 1]; x++) {
        if (!arr.find(num => num === x)) {
          missingNums.push(x);
        }
    }
    console.log(missingNums)
    return missingNums
}