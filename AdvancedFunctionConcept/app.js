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

function createTaxCalculator(tax){             // factory function
    function calculateTax(amount){
        return amount*tax;
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

