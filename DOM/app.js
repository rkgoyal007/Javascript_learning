// const listItemElememts = document.querySelectorAll('li');
const listItemElememts = document.getElementsByTagName('li');

const body = document.body;

const li = document.querySelector('li:last-of-type');  // sudo selector 
li.textContent = li.textContent +('changed!');

const h1 = document.getElementById('main-title');
h1.textContent = 'some new title1';
h1.style.color = "white";
h1.style.backgroundColor = "red";

 for(let listItemEle of listItemElememts){
   console.dir(listItemEle);
 }