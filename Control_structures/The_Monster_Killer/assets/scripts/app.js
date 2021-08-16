const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE =20;
let chosenMaxLife = 100;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound(){
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if(currentMonsterHealth <=0 && currentPlayerHealth > 0){
    alert('YOU WON!');
  } else if(currentPlayerHealth <= 0){
    alert('YOU LOST');
  } else if(currentPlayerHealth <=0 && currentMonsterHealth <=0){
    alert('YOU HAVE A DRAW!');
  }
}

function attackMonster(mode){
  let maxDamage;
  if(mode === 'ATTACK'){
    maxDamage = ATTACK_VALUE;
  } else if(mode === 'STRONG_ATTACK'){
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  endRound();
}

function healPlayerHandler(){
  let healValue;
  if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE)
  {
    alert("YOU CAN'T HEAL MORE THEN YOUR INITIAL HEALTH");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

function attackHandler(){
  attackMonster('ATTACK');
}

function strongAttackHandler(){
  attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);