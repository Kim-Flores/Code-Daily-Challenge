/*
Instructions:
Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]
*/

//Solution:
const reverseSeq = n => {
  let arr = [];
  for(let i=1;i<=n;i++){
    arr.push(i)
  }
  return arr.sort((a,b)=>b-a)
};
