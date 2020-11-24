/*
Task
Given a number , Return _The Maximum number _ could be formed from the digits of the number given .

Notes
Only Natural numbers passed to the function , numbers Contain digits [0:9] inclusive

Digit Duplications could occur , So also consider it when forming the Largest

Input >> Output Examples:
maxNumber (213) ==> return (321)
Explanation:
As 321 is _The Maximum number _ could be formed from the digits of the number *213*** .

maxNumber (7389) ==> return (9873)
*/

//Solution:

function maxNumber(n){
  return parseInt(n.toString().split('').sort((a,b) => b - a).join(''))
}

//Other Solutions:

function maxNumber(n){
  return Number(String(n).split("").sort().reverse().join(""));
}

const maxNumber = n => +String(n).split("").sort().reverse().join("")
