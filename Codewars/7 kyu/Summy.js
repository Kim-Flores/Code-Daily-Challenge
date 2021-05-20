/* 
Instructions:
Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer 
in the string into an integer and return their sum.

Example
summy("1 2 3")  ==> 6
Good luck!
*/

//Solution:
function summy(arr){
    return arr.split(' ').reduce((a,b) => a + Number(b), 0)
}

//Other
function summy(s){
  return s.split` `.reduce((a,b)=>a+ +b,0)
}
