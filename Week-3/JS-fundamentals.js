/*
Write the function divideArray() in script.js that has a single numbers parameter
 containing an array of integers. The function should divide numbers into two arrays, 
 evenNums for even numbers and oddNums for odd numbers. 
 Then the function should sort the two arrays and output the array values to the console.
*/

const divideArray = (nums) => {
  let oddList = [];
  let evenList = [];

  nums.map((item) => {
    if (item % 2 === 0) {
      evenList.push(item);
    } else {
      oddList.push(item);
    }
  });
  oddList.sort();
  evenList.sort();

  console.log(oddList);
};

let nums = [4, 2, 9, 1, 8];
divideArray(nums);
