/* 
Instructions:

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
*/

//const arr = N => [ /* the numbers 0 to N-1 */ ];
//Solution:
function arr(N){
 let newArr = [];
  for (let i = 0; i < N; i+=1){
    newArr.push(i)
  }
  return newArr
} 

