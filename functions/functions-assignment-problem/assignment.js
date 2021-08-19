
const sayHello = name => console.log('hi '+ name );

const sayHello2 = (name,phrase) => console.log('hi '+ name +' '+ phrase );
const sayHello3= () => console.log('hi Rahul');
const sayHello4 = name => 'hi '+ name;

sayHello('Max');
sayHello2('Max','are you there!');
sayHello3();
console.log(sayHello4('Max'));

const sayHello5 = (name,phrase = 'How are you?') => console.log('hi '+ name +' '+ phrase );
sayHello5('Max');

function checkInput(cb,...strings){
  let hasEmptyText = false;
  for(const text of strings){
    if(!text){
      hasEmptyText = true;
      break;
    }
  }
  if(!hasEmptyText){
    cb();
  }
}

checkInput(()=>{console.log('all not empty');} , 'hello','ram','rahul'); 