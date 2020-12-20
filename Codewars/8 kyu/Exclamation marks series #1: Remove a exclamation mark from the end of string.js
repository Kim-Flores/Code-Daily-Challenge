/*
Description:
Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

//Solution:
function remove(s){
  //coding and coding....
  return s.endsWith('!') ? s.slice(0, -1) : s
}

//Other Solution:
const remove = s => s.replace(/!$/, '');
