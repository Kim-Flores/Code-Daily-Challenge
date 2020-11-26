/*
Instructions: 
You are provided with array of positive non-zero ints and int n representing n-th power (n >= 2).

For the given array, calculate the sum of each value to the n-th power. Then subtract the sum of the original array.

Example 1: Input: {1, 2, 3}, 3 --> (1 ^ 3 + 2 ^ 3 + 3 ^ 3 ) - (1 + 2 + 3) --> 36 - 6 --> Output: 30

Example 2: Input: {1, 2}, 5 --> (1 ^ 5 + 2 ^ 5) - (1 + 2) --> 33 - 3 --> Output: 30
*/

//Solution:
function modifiedSum(a, n) {
  // Write your code here
  return a.reduce((acc,item) => Math.pow(item, n) + acc - item,0)
}

//Other Solution:
function modifiedSum(a, n) {
  return a.map( item => item**n).reduce( (i,b) => i + b ) - a.reduce( (i,b) => i + b );
}
