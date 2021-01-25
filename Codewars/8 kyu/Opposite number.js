/*
Instructions:
Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

//Solution:
function opposite(number) {
  return Math.sign(number) === -1 ? Math.abs(number) : -Math.abs(number)
}

//Shorter
function opposite(number) {
  return(-number);
}
