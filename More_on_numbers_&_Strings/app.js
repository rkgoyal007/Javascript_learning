// function to get random number btw min and max

function randomIntBetween(min,max){                              // let min:5 and max:10
  return Math.floor(Math.random() * (max - min + 1) + min);      // 10.99999

}
console.log(randomIntBetween(1,10));

//Tagged template

function productDescription(strings,productName,productPrice){     // takes 3 iargyuments
  console.log(strings);                                            //first argument is array of strings(non dynamic string part)
  console.log(productName);
  console.log(productPrice);
  let priceCatagory = 'very cheap regarding its price';
  if(productPrice>20){
    priceCatagory = 'fairly priced';
  }
  //return `${strings[0]} ${productName} ${strings[1]} ${priceCatagory} ${strings[2]}`;
  return {name : productName , price : prodPrice};                // returns object with dynamic data
}

const prodName = 'javaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is (${prodPrice}). `;
console.log(productOutput);

