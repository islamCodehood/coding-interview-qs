/*Write a function that takes 2 arguments. The first one is
*an array and the second one is a number (chunk size).
*The function should return an array of array chunks inside
*with each array length is equal to the number (chunk size).*/
//Examples:
//chunk([1,2,3,4,5], 2) //return [[1,2], [3,4], [5]]
//chunk([3,7,8,1,2,4,10,13,12], 3) //return [[3,7,8], [1,2,4], 
//[10,13,12]]
//chunk([1,2,3,4,5], 8) //return [[1,2,3,4,5]]

//The first solution
function chunk(arr, size) {
    const chunked = [];
    for (const elem of arr) {
        const lastChunk = chunked[chunked.length - 1]
        if (!lastChunk || lastChunk.length === size) {
            chunked.push([elem])
        } else {
           lastChunk.push(elem)
        } 
    }
    return chunked;
}


//The second solution
function chunk(arr, size) {
    const chunked = [];
    for (var i = 0; i < arr.length; i+= size) {
        chunked.push(arr.slice(i, i+size))
    }
    console.log(chunked)
    return chunked;
}
