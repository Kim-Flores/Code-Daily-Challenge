/*
Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted 
in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. 
If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

If there are no issues with the kata and you successfully completed it, please rank and upvote!
*/


//Solution:
function sortItOut(array){
 let even = []
 let odd = []
 array.map(item => Math.floor(item) % 2 == 0 ? even.push(item) : odd.push(item))
 let evenSort = even.sort((a,b) => a - b).reverse()
 let oddSort = odd.sort((a,b) => a - b)
 return oddSort.concat(evenSort)
}

//Other solution:
function sortItOut(array){
  return array.filter(a => Math.floor(a) % 2 !== 0).sort((a,b) => a - b)
  .concat(array.filter(a => Math.floor(a) % 2 === 0).sort((a,b) => b - a))
}
