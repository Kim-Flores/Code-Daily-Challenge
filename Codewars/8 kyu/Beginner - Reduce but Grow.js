/*
Instructions:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

//Solution:

function grow(x){
return x.reduce((a,c)=> a*c)

}

//Other Solution:
const grow = x => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};