const userChosenKeyName = 'level';

const person = {
  'first name' : 'max',
  age : 30,
  [userChosenKeyName]:'rk',        // dynamically setting properties 
  hobbie : ['sports','cooking'],
  greet : function(){
    alert('Hi there!');

  }
};
const keyName = 'first name'
person.isAdmin = true;      // adding property in object
delete person.age;          // deletion in object 
person.greet(); 
console.log(person[keyName]);    // Dynamic accessing properties

const movieList = document.getElementById('movie-list');
movieList.style['backgroundColor'] = 'red';
movieList.style.display = 'block';

const numbers = {5:'hi',1:'true'};
console.log(numbers);            //Sorted automatically