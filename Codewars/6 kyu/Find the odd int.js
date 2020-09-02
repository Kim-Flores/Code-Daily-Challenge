/*
Instructions:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

//Solutions:

function findOdd(nums) {
  //happy coding!
let count = 0
  for (let i =0; i < nums.length; i++){
    for (let j=0; j<nums.length; j++){
      if (nums[i] == nums[j]){
        count++
      }
    }
      if (count %2 != 0){
        return nums[i]
    }
  }
};
