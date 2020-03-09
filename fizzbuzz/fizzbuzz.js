//Write a function that takes an argument of n number and console log the numbers
//from 1 to n, with exceptions:
//if the number is multiplies of 3 console log fizz
//if the number is multiplies of 5 console log buzz



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