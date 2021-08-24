// const numbers = [1,2,3,4,5];
// console.log(numbers);

// const moreNumbers = new Array('hi');
// console.log(moreNumbers);

// const moreNumbers = Array.from(1,2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1,2);
// console.log(yetMoreNumbers);


// const  listItems = document.querySelectorAll('li');      // Use of Array.from
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const personalData = [30,'max',{moreDetails : []}];

// const analyticsData = [[1,1.6],[-5.4,2.1]]
// console.log(personalData[1]);

// for(const data of analyticsData){
//   for(const daatPoints of data){
//     console.log(daatPoints);
//   }
// }

// const hobbies = ['sports','cooking'];
// hobbies.push('reading');
// hobbies.unshift('coding');
// hobbies.splice(0,0,'good food');     // inserted 1 element at index 0
// console.log(hobbies);
// hobbies.splice(1,2);                // delete 2 element at index 1
// console.log(hobbies);

// const removedElements = hobbies.splice(2,1);
// hobbies.splice(-1,1);              // delete last indexed element
// console.log(hobbies);

// const testResults = [5,1.5,5.3,8,-4]
// const storedResults = testResults.slice();      // make a copy of array
// const newResults = testResults.slice(0,2);  
// const Results = testResults.slice(2);   // copy from 2nd index to last index
// testResults.push(3);                        
// console.log(testResults,storedResults,newResults); 

// const storedResult = testResults.concat([2,3]);       // add items then make copy of array
// console.log(testResults,storedResult);      

// console.log(testResults.indexOf(5.3));               // gives index of item
// console.log(testResults.included(10));               // gives boolean value ,true if value exists in array


// forEach()
const prices = [3,4,6,7.3 ,5.6];
const tax = 0.19;
const taxAdjustedPrices = [];

// for(const price of prices){
//   taxAdjustedPrices.push(price*(1+tax));
// }

prices.forEach((price,idx,prices) => {
  const priceObj ={index : idx , taxAdjustedPrices : price*(1+tax)};
  taxAdjustedPrices.push(priceObj); 
})
console.log(taxAdjustedPrices);

