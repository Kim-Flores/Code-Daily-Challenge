/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

//Solution:
function invert(array) {
  let newArr=[]
  array.forEach(function(item){
  if (item === -Math.abs(item)){
     newArr.push(Math.abs(item))
    }
    else{
     newArr.push(-Math.abs(item))
    }
})
  return newArr
}

//Other Solutions:
function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}

function invert(array) {
  var newArr = [];
  for(var i = 0; i < array.length; i++){
    newArr.push(-array[i]);
  }
   return newArr;
}
