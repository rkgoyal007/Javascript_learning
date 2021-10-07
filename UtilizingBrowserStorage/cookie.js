const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');


storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = {name: 'Max',age:30};
  document.cookie = `uid=${userId} ; max-age=30`;    // max-age set for expiring seesion time configuration
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  console.log(document.cookie);
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i=>{                  // all mothods on strings are applicable for cookies too
    return i.trim();
  });  
  console.log(data[1].split('=')[1]);     
});
