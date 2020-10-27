/*
Instructions:
For an integer k rearrange all the elements of the given array in such way, that:

all elements that are less than k are placed before elements that are not less than k;
all elements that are less than k remain in the same order with respect to each other;
all elements that are not less than k remain in the same order with respect to each other.

For k = 6 and elements = [6, 4, 10, 10, 6], the output should be splitByValue(k, elements) = [4, 6, 10, 10, 6].

For k = 5 and elements = [1, 3, 5, 7, 6, 4, 2], the output should be splitByValue(k, elements) = [1, 3, 4, 2, 5, 7, 6].
*/


//Solution
function splitByValue(k, elements){
  const minOfIndex=[]; 
  const maxOfIndex=[];
  elements.forEach(j => j < k ? minOfIndex.push(j) : maxOfIndex.push(j))
  return minOfIndex.concat(maxOfIndex)
}

//With no ternary:
function splitByValue(k, elements){
minArray=[]
maxArray=[]
elements.map((number)=>{
if (number < k){
  minArray.push(number)
  }
  else{maxArray.push(number)}
})
return minArray.concat(maxArray)
}

//Other solutions:

function splitByValue(k, elements){
minArray=[]
maxArray=[]
elements.map((number)=>{
number < k ? minArray.push(number) : maxArray.push(number)
})
return minArray.concat(maxArray)
}
