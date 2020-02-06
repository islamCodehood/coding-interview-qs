/*Write a function that takes an argument of an array of
 *numbers and returns the first duplicate.
 *Example: findFirstDupl([2, 5, 4, 1, 3, 5, 4]) returns 4
 */

function findFirstDupl(arr) {
    let numMap = {}
    let minIndex = arr.length
    for (let i = 0; i < arr.length; i ++) {
        if (!numMap[arr[i]]) {
            numMap[arr[i]]= {
                count: 1,
                index: i
            }
        } else {
            numMap[arr[i]]['count'] ++
        }
    }
    for (const num in numMap) {
        if (numMap[num]['count'] === 2) {
            if (numMap[num]['index'] < minIndex) {
                minIndex = numMap[num]['index']
            }
        }
    }
    return arr[minIndex]
}
