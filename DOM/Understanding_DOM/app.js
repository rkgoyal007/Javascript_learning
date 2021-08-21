// const listItemElememts = document.querySelectorAll('li');
// const listItemElememts = document.getElementsByTagName('li');

// const body = document.body;

// const li = document.querySelector('li:last-of-type');  // sudo selector 
// li.textContent = li.textContent +('changed!');

// const h1 = document.getElementById('main-title');
// h1.textContent = 'some new title1';
// h1.style.color = "white";
// h1.style.backgroundColor = "red";

//  for(let listItemEle of listItemElememts){
//    console.dir(listItemEle);
//  }

//understanding child node concept
// const list = document.querySelector('ul');
// console.log(list.children);   // 3 child element nodes
// console.log(list.children[1]); // 2nd child element node
// console.log(list.childNodes);  // 7 child nodes

//understanding parent node concept
// const liFirst = document.querySelector('li');
// liFirst.parentNode              // shows parent Node
// liFirst.closest('body');        // accessing anncestor

//understanding sibling traversal
// const ul = document.querySelector('ul');
// console.log(ul.nextElementSibling);
// console.log(ul.previousElementSibling);


//Styling using js
const section = document.querySelector('section');
const button = document.querySelector('button');

// section.className ='';            // Reset the class of section

button.addEventListener('click', ()=>{
  // if(section.className = 'red-bg visible'){
  //   section.className = 'red-bg invisible';
  // } else{
  //   section.className = 'red-bg visible';
  // }

  //section.classList.toggle('visible');
  section.classList.toggle('invisible');
})


//section.innerHTML = '<h2>A new title!</h2>'   //It replaces current section childrens to <h2> tag

// const list = document.querySelector('ul');
// list.innerHTML = list.innerHTML + '<li>Item 4</li>'       // inserted a new element

// const div = document.querySelector('div')
// div.insertAdjacentHTML('beforeend', '<p>something went wrong!');     // creating new node 

const list = document.querySelector('ul');

const newLi = document.createElement('li');  // creating new list item
newLi.textContent = 'Item 4';
list.appendChild('newLi');         // appended new list item
 


