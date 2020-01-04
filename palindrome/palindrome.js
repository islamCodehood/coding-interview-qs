/*Write a function that takes an argument of string and returns 
 *true, or false according to the string being palindrome or not.
 *Take into consideration that spaces count, while punctuation doesn't.
 *For example: palindrome("Dad") return true
 * palindrome("code") return false
 */


//First solution
function palindrome(str) {
  let reversed = str
    .split("")
    .reverse()
    .join("");
  return str.toLowerCase() === reversed.toLowerCase();
}

/*********************************************************/

//Second solution
function palindrome(str) {
  return str
    .toLowerCase()
    .split("")
    .every((char, i) => char === str.toLowerCase()[str.length - i - 1]);
} 

/*********************************************************/

//Third solution
function palindrome(str) {
  let reversed = str.split("").reduce((rev, char) => char + rev);
  return str.toLowerCase() === reversed.toLowerCase();
}