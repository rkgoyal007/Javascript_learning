// function to get random number btw min and max

function randomIntBetween(min,max){                             // let min:5 and max:10
  return Math.floor(Math.random() * (max - min + 1) + min);    // 10.99999

}

console.log(randomIntBetween(1,10));