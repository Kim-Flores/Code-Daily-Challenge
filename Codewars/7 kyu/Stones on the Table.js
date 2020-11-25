/*
There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

Examples:

"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9
*/

//Solution:
function solve(stones) {
  let counter = 0
  let split = stones.split('')
  for(let item = 0; item < split.length; item++){
    if (split[item] == split[item + 1]){ 
     counter++
   }
  }
return counter

}

//Other Solution:
function solve(stones) {
  return stones.split('').filter((cValue,cIndex,arr) => (cValue === arr[cIndex-1])).length;;
}

function solve(stones) {
  return stones.split('').reduce((totalRemove, stone, i) => {
    return i >= 1 && (stones[i - 1] === stone) ? ++totalRemove : totalRemove
  }, 0) 
}
