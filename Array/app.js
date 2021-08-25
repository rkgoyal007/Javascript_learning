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
// const prices = [3,4,6,7.3 ,5.6];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for(const price of prices){
//   taxAdjustedPrices.push(price*(1+tax));
// }

// prices.forEach((price,idx,prices) => {
//   const priceObj ={index : idx , taxAdjustedPrices : price*(1+tax)};
//   taxAdjustedPrices.push(priceObj); 
// })
// console.log(taxAdjustedPrices);


//map()
// const prices = [3,4,6,7.3 ,5.6];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price,idx,prices) => {
//   const priceObj ={index : idx , taxAdjustedPrices : price*(1+tax)};
//   return priceObj; 
// })
// console.log(prices,taxAdjustedPrices);

//sort() and reverse()
// const prices = [3,4,8,7.3 ,5.6];
// const sortedPrices = prices.sort((a,b) => {
//   if(a>b){
//   return 1;
//    } else if(a === b){
//      return 0;
//    } else {
//      return -1;
//    } 
// });
// console.log(sortedPrices);
// console.log(sortedPrices.reverse());

//filter()
// const prices = [3,4,8,7.3 ,5.6];

// const filteredPrices = prices.filter((price,index,prices) => {
//    return price > 6;
// });
// console.log(filteredPrices);


//Arrow function
// const prices = [3,4,8,7.3 ,5.6];
// const filteredPrices = prices.filter(price =>  price > 6);       // Arrow function
// console.log(filteredPrices); 

// const prices = [3,4,8,7.3 ,5.6];
// let sum = 0;
// prices.forEach((price) => {
//   sum+=price;
// })
// console.log(sum);

//Reduce method
//const prices = [3,4,8,7.3 ,5.6];
// const sum = prices.reduce((preValue,curValue,curIndex,prices) =>{
//   return preValue+curValue ;   
// },);
// const sum = prices.reduce((preValue,curValue) =>preValue+curValue,0);   // Arrow function
// console.log(sum);


//split() use to convert string to array
//join() used to convert array  to string
const data = 'new york;10.99;2000';
const transformedData = data.split(';');
console.log(transformedData);

const nameFragments = ['max','rahul'];
const name = nameFragments.join(' ');
console.log(name);
