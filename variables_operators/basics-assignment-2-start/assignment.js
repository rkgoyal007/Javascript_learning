const task3Element = document.getElementById('task-3');

function anything(){
    alert('anything');
}

function printName(name){
    alert('name:' + name);
}

function combine(str1,str2,str3)
{
    return str1+' '+str2+' '+str3;
}

printName('Rahul');

task3Element.addEventListener('click',anything);

const combinedString =combine('hi','there','who');
alert(combinedString);

