// class way of doing it

// class AgedPerson{
//   printAge(){
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson{
//   name = 'Max';

//   constructor(){
//     super();
//     this.age = 30;
//   }

//    greet(){
//     console.log(`Hi,I am  ${this.name} and I am ${this.age} years old`);
//   }
// }


//functional way of doing it

function Person()
{
  this.age = 30;
  this.name = 'Max';
  this.greet = function(){
    console.log(`Hi,I am  ${this.name} and I am ${this.age} years old`);
  };
}

Person.describe = function(){
  console.log('Creating persons...');
}

// Person.prototype = {                              // creating a new prototype
//   printAge(){
//     console.log(this.age);
//   }
// }

Person.prototype.printAge = function(){               // adding new property to existing prototype(typically do this to remain having constructor method)
  console.log(this.age);
};

console.log(Person);

const p = new Person; 
p.greet();
p.printAge();
//console.log(p.toString());
console.log(p.__proto__ === Person.prototype);
console.log(p);
console.log(p.legth);
 
const p2 = new p.__proto__.constructor;
console.log(p2);

console.dir(Object.prototype);
console.dir(Object.prototype.__proto__);