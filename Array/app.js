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

const personalData = [30,'max',{moreDetails : []}];

const analyticsData = [[1,1.6],[-5.4,2.1]]
console.log(personalData[1]);

for(const data of analyticsData){
  for(const daatPoints of data){
    console.log(daatPoints);
  }
}