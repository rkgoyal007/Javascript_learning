// var name = 'Max';

// if(name === 'Max'){
//   var hobbies = ['music','sports'];
//   console.log(hobbies);
// }

// function greet(){
//   let age = 30;
//   let name = 'Manu';
//   console.log(name,age,hobbies);
// }
// console.log(name);
// greet(); 

//'use strict';
// let name ='Max';
// var undefined =5;
// console.log(name);

// function getName(){
//   return prompt('your name:','');
// }

// function greet(){
//   let userName = getName();
//   console.log('Hello ' + userName);
// }
// greet(); 

const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

function printMessage() { 
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

function addListener() {
  clickableBtn.addEventListener('click', printMessage);
}

addListenerBtn.addEventListener('click', addListener);
