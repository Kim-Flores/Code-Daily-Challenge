/*
Instructions:
Task
Given an array of numbers and an index, return the index of the least number larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/

//Solution:
function leastLarger(a,i) {
  const arr = a.filter(item => item > a[i]).sort((a,c) => a-c)
  return a.indexOf(arr[0])
}

//Other Solutions:
function leastLarger(a,i) {
  let arr = [];
  for (let j = 0; j < a.length; j++) {
    if (a[j] > a[i]) arr.push(a[j])
  }
  return a.indexOf(arr.sort((a, b) => a-b)[0]);
}
