/*
Instructions:
Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed to the function is positive

Single-digit numbers are considered Automorphic number.

Input >> Output Examples
autoMorphic (25) -->> return "Automorphic" 
Explanation:
25 squared is 625 , Ends with the same number's digits which are 25 .
autoMorphic (13) -->> return "Not!!"

*/

//Solution:
function automorphic(n){
  //your code here
  let squared = Math.pow(n,2)
  return squared.toString().includes(n) ? "Automorphic" : "Not!!"
}

//other solution:
const automorphic = n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!" ;
