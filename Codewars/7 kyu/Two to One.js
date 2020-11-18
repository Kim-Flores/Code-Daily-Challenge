/*
Instructions:

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/


//Solution:
//original solution
// function longest(s1, s2) {
//   // your code
//   s1 = s1.split('')
//   s2 = s2.split('')
//   let joined = s1.concat(s2).sort()
//   return [...new Set(joined)].join('')
// }

function longest(s1, s2) {
  // your code
  s1 = s1.split('')
  s2 = s2.split('')
  return [...new Set(s1.concat(s2))].sort().join('')
}

//Other solution:
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
