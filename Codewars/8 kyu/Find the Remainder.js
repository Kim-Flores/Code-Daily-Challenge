/*
Instructions:
Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. 
Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
*/

//Solutions:
function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  if(a === 0 || b === 0) return NaN
  let smallest = a < b ? a : b
  let biggest = a > b ? a : b
  return biggest % smallest
}

//Shorter solution:
function remainder(a, b){
  return a > b ? a % b : b % a;
}
