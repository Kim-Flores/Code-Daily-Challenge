/*
Instructions:
Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

Python / JavaScript: The function has to work for strings and lists.

Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]
*/

//Solution:
function replaceAll(arr, find, newNum) {
  if(typeof(arr) === 'string') 
    return arr.split('').map(item => item === find ? item = newNum : item).join('')
    
  return arr.map(item => item === find ? item = newNum : item)
