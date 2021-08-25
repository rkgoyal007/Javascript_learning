//sets()
// const ids = new Set([1,2,3,'hi']);
// ids.add(2); 
// if(ids.has('hi')){
// ids.delete('hi');
// }
 
// for(const entry of ids.values ()){
//   console.log(entry);
// }
// console.log(ids);

//maps()
// const person1 = {name : 'max'};
// const person2 = {name : 'manuel'}
// const personData = new Map([[person1,[{date:'yesterday',price:10}]]]);
// personData.set(person2,[{date:'two weeks ago',price:100}]);
// console.log(personData);
// console.log(personData.get(person1));

// //retriving info from map()
// for(const entry of personData.entries()){
//   console.log(entry);
// }

// for(const [key,value] of personData.entries()){
//   console.log(key,value);
// }

// for(const key of personData.keys()){
//   console.log(key);
// }

// for(const value of personData.values()){
//   console.log(value);
// }
// console.log(personData.size);



//Weakset()
// const person = {name :'max'};
// const persons = new WeakSet();
// persons.add(person);
// console.log(persons);

// //WeakMap();
// const personData = new WeakMap();
// personData.set(person,'extra info!');
// person=null;
// console.log(personData);