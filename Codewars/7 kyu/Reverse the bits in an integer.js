/*
Instructions:
Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.

https://www.codewars.com/kata/5959ec605595565f5c00002b
*/

//Solution:
function reverseBits (n) {
  let binary = parseInt(n.toString(2).split("").reverse().join(""),2)
  return binary
}
//Other Solution:
function reverseBits(n) {
  const binaryReverse = n.toString(2).split('').reverse().join('')
  return parseInt(binaryReverse, 2)
}

function reverseBits(num) {
  return parseInt(num.toString(2).split("").reverse().join(""), 2);
}
