function add(num1,num2){            //pure function
    return num1+num2;
}

console.log(add(2,6));
console.log(add(2,246));

function random (num1){             // Impure function
    return num1+Math.random();
}

console.log(random(7));

let previousResult = 0;
function addMore(num1,num2){         // Impure function
    let sum=num1+num2;
    previousResult =sum;
    return  sum;
}
addMore(5,9);
console.log(previousResult);

const hobbie = ['cooking','sports'];
function showHobbies(h){             // Impure function
    h.push('biking'); 
    console.log(h);
}
showHobbies(hobbie);

let multiplier = 1.1;

function createTaxCalculator(tax){             // factory function
    function calculateTax(amount){
        console.log(multiplier);
        return amount*tax*multiplier;
        
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

//multiplier = 2;                //multipler value will be change because it is changed before inner fun execution
// tax = 0.28;                  // tax value won't change because outer function is already executed and
                               // it has already passed tax value to inner function. 
console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));


let userName = 'Max';
function greetUser(){
    let name = 'Anna';
    console.log(`Hi ${name}`);
}
let name = 'Maximilian'

userName = 'Manuel';
greetUser();

//Recursion

function powerOf(x,n){
    // if(n===1){
    //     return x;
    // }
    // return x * powerOf(x,n-1);
    return n===1? x:(x*powerOf(x,n-1));
}
console.log(powerOf(2,3));