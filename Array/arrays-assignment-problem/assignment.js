const numbers = [4,5,6,7,8,9];
const filteredNumber = numbers.filter(number => number>5);
console.log(filteredNumber);

const mappedNumber = numbers.map( val => ({num : val}));
console.log(mappedNumber);

const multipication = numbers.reduce((prevValue,curValue)=> prevValue*curValue,1);
console.log(multipication);

// splits the array into arguments
function findMax(...nums){
  let curMax = numbers[0];
  for(const num of nums){
    if(num > curMax){
      curMax=num;
    }
  } 
  return curMax;
}
console.log(findMax(...numbers));

function findMinMax(...nums){
  let curMax = numbers[0];
  let curMin = numbers[0];
  for(const num of nums){
    if(num > curMax){
      curMax = num;
    }
    if(num < curMin){
      curMin = num;
    }
  }  
  return [curMin,curMax];
}
const [min,max] = findMinMax(...numbers);
console.log(min,max);

const userIds = new Set();
userIds(4);
userIds(7);
userIds(9);
console.log(userIds);