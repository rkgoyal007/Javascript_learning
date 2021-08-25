const person = {
  name : 'max',
  age : 30,
  hobbie : ['sports','cooking'],
  greet : function(){
    alert('Hi there!');

  }
};

person.isAdmin = true;      // adding property in object
delete person.age;          // deletion in object 
person.greet(); 