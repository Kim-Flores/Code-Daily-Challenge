/*
Instructions:

Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Example:
odd_or_even([0])          ==  "even"
odd_or_even([0, 1, 4])    ==  "odd"
odd_or_even([0, -1, -5])  ==  "even"
*/

//Solution:
function oddOrEven(array) {
   //enter code here
  let arraySum = 0;
  for(let i = 0; i < array.length; i++){
    arraySum += array[i];
  }
  if (arraySum % 2 === 0){
    return "even";
  }else{
    return "odd";
  }
}

// other solution:

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}
