import { formatTestResults } from "@jest/test-result";

/*Two sum problem

You are given an array and some number S. Determine
 if any two numbers within the array sum to S.
We’ll first cover the most intuitive way to solve this problem.
 That is to simply loop through the array and 
 for each element check if there is a second element 
 that when both are summed are equal to S. 
 This will require us to write a nested loop.[1] 
 This solution will run in O(n2) time though because of the nested loop. 
 We can actually do better and write an algorithm that runs only in O(n) time 
 but uses some extra space.*/

/*function twoSum(numbers, target){
     let newNums=[];
     for(let i=0; i< numbers, i++){
        newNums.push(numbers[i]);
     }
     let newNums= numbers.sort((a,b) => a-b);
     let start =0;
     let end= numbers.length-1;
     let sum= newNums[start]+newNums[end];
     while(sum!== target){
         if(sum > target){
            end--
         }else{
                start++
            }
            sum= numbers[start]+numbers[end];
         }
         return indexOf(newNums[start]);

     }*/

/*const getIndicesOfItemWeights = (arr, limit) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result[0] && result[1]) break; // break out of the loop if the result is full.

    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === limit) {
        // if the sum of two elements is eqaul to the limit.
        result.push(i, j); // push the indices to the result array.
        break; // break out of the second loop
      }
    }
  }
  console.log(result);
  return result.sort((a, b) => b - a);
};

const arr = [4, 6, 10, 15, 16];
const limit = 21;

const x = getIndicesOfItemWeights(arr, limit);
console.log(x);*/
function twoSum(arr, S) {
  var sums = [];
  var hashTable = {};
  for (var i = 0; i < arr.length; i++) {
    var sumMinusElement = S - arr[i];
    if (hashTable[sumMinusElement.toString()] !== undefined) {
      sums.push([arr[i], sumMinusElement]);
    }
    hashTable[arr[i].toString()] = arr[i];
    console.log(hashTable);
  }
  console.log(sums);
}
twoSum([3, 5, 2, -4, 8, 11], 7);
