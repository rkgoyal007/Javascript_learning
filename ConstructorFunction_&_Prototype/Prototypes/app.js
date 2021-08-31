//class way of doing it

class AgedPerson{
  printAge(){
    console.log(this.age);
  }
}

class Person extends AgedPerson{
  name = 'Max';

  constructor(){
    super();
    this.age = 30;
    // this.greet()....};
  }

  // greet = () => {
  //   console.log(`Hi,I am  ${this.name} and I am ${this.age} years old`);
  // };

   greet(){
    console.log(`Hi,I am  ${this.name} and I am ${this.age} years old`);
  };
}


//functional way of doing it(constructor function)

// function Person()
// {
//   this.age = 30;
//   this.name = 'Max';
//   // this.greet(){....};
// }
// Person.prototype.greet = function(){
//   console.log(`Hi,I am  ${this.name} and I am ${this.age} years old`);
// };

// Person.describe = function(){
//   console.log('Creating persons...');
// }

// Person.prototype = {                              // creating a new prototype
//   printAge(){
//     console.log(this.age);
//   }
// }

// Person.prototype.printAge = function(){               // adding new property to existing prototype(typically do this to remain having constructor method)
//   console.log(this.age);
// };

// const p = new Person; 
// p.greet();
// p.printAge();
// //console.log(p.toString());
// console.log(p.__proto__ === Person.prototype);
// console.log(p);
// console.log(p.legth);
 
// const p2 = new p.__proto__.constructor;
// console.log(p2);

// console.dir(Object.prototype);
// console.dir(Object.prototype.__proto__);

// const p = new Person();
// const p2 = new Person();
// //console.log(p.__proto__ === p2.__proto__);
// p.greet();
// console.log(p);

// const button = document.getElementById('btn');
// button.addEventListener('click',p.greet.bind(p));


const course = {
  // new Object()
  title: 'JavaScript - The Complete Guide',
  rating: 5
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function() {
    console.log(`${this.rating}/5`);
  }
});

const student = Object.create({
  printProgress: function() {
    console.log(this.progress);
  }
}, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Max',
    writable: true
  }
});

// student.name = 'Max';

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

student.printProgress();

console.log(student);

course.printRating();
