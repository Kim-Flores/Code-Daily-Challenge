/*
Instructions:
  Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples:

sumCubes(2) // 9
// sum of the cubes of 1 and 2 is 1 + 8
*/

//Solution:
function sumCubes(n){
  let arr = []
  for(let i = 1; i <= n; i++){
    arr.push(i)
  }
  return arr.reduce((acc, curr) => Math.pow(curr, 3) + acc)
}

//Other Solution:
function sumCubes(n){
  if (n == 1) {
    return n**3;
  } else {
    return n**3 + sumCubes(n - 1);
  }
}

//Shorter
function sumCubes(n) {
  return (n * (n + 1) / 2) ** 2;
}
