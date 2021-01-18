/*
Instructions:
Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

For Example:

[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]
*/

//Solutions:
function sumOfMinimums(arr) {
  return arr.reduce((item, curr) => item + Math.min(...curr),0)
}

//Other Solution:
function sumOfMinimums(arr) {
  let total = 0;
  
  for (let i = 0; i < arr.length; i++){
   total += Math.min(...arr[i])
  }
  
  return total;
}
