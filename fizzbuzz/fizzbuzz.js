/*Write a function that takes an argument of n number and print 
 *the numbers from 1 to n, with exceptions:
 *if numbers which are multiplies of 3 print fizz instead
 *if numbers which are multiplies of 5 print buzz instead
 *and finally if numbers are multiplies of both 3, and 5 
 *print fizzbuzz.*/


 /*Examples: fizzbuzz(15) 1
                          2
                          fizz
                          4
                          buzz
                          fizz
                          7
                          8
                          fizz
                          buzz
                          11
                          fizz
                          13
                          14
                          fizzbuzz*/



function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("fizzbuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
}