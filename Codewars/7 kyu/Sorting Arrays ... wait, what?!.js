/*
Instructions:
Sorting an array of positive integers
Background
You are a(n) novice/average/senior/professional/world-class (choose one) Computer Scientist and Web Developer who specialises in Javascript 
(choose the language of your choice).
One day, while you were away, your naughty little brother fiddles with your computer and somehow manages to disable the sort() method for arrays!

Task
Being the developer that you are, 
you decide to fix the sort() method so that it works for any array consisting of only positive integers. You may use any algorithm you wish.

Extension
If you wish, you could also fix the sort() method for arrays such that it also works on String arrays (sorting them into alphabetical order) 
but please note that it is not required and will not be tested.
*/


//Solution:
// Fix the sort() method for arrays here.
function quickSort(arr){
  if(arr.length <= 1) return arr
  const pivot = arr[arr.length - 1]
  const leftArr = []
  const rightArr = []
  for(let item of arr.slice(0,arr.length - 1)){
    item < pivot ? leftArr.push(item) : rightArr.push(item)
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}
Array.prototype.sort = function (arr) {
 
 return quickSort(this)
}
