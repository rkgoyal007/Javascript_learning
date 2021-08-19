const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false; 

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK},${PAPER} or ${SCISSOR} ?`,'').toUpperCase();
  if(selection !== ROCK   && selection !== PAPER && selection !== SCISSOR){
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if(randomValue<0.34){
    return ROCK;
  } else if(randomValue<0.67){
    return PAPER;
  } else{
    return SCISSOR;
  }
};

const getWinner = (cChoice,pChoice) => {
  return cChoice === pChoice ? RESULT_DRAW : (cChoice === ROCK && pChoice === PAPER ||
         cChoice === PAPER && pChoice ===SCISSOR  ||
         cChoice === SCISSOR && pChoice === ROCK) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS; // Nested Ternery operator use
  
  // if(cChoice === pChoice){
  //   return RESULT_DRAW;
  // } else if(cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice ===SCISSOR  || cChoice === SCISSOR && pChoice === ROCK){
  //   return RESULT_PLAYER_WINS;
  // } else {
  //   return RESULT_COMPUTER_WINS;
  // }
};

startGameBtn.addEventListener('click',() => {
  if(gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log('Starting game here...');
  const playerChoice = getPlayerChoice();
  const computerChoice =  getComputerChoice();
  const winner = getWinner(computerChoice,playerChoice);
  let message = `You picked ${playerChoice},computer picked ${computerChoice} therefore you ` ;
  if(winner === RESULT_DRAW){
    message +=  `had a draw`;
  } else if(winner === RESULT_PLAYER_WINS){
    message += `won`;
  } else {
    message += `lost`;
  }
  alert(message);
  gameIsRunning = false;
});

