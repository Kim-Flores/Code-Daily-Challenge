/*Instructions:
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.

More examples in the test cases.

Good luck!
*/

//Solution:
function repeats(arr){
//nested filter like nested loops
  const newArr = arr.filter((item)=> {
  //goes through all items in the array
    const numRepeats = arr.filter((innerItem)=> {
    //goes through the array again and compare which nums repeat. 
      return innerItem === item;
    });
    return numRepeats.length === 1;
    //returns nums that occur only once.
  });
  return newArr[0] + newArr[1];
};

