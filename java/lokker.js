
  // Variabler for å holde poengsummen
let playerScore = 0;
let computerScore = 0;

// Funksjon for å velge datamaskinens valg
function getComputerChoice() {
  const choices = ['Stein', 'Saks', 'Papir'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Funksjon for å avgjøre vinneren
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Uavgjort!";
  }
  if (
    (playerChoice === 'Stein' && computerChoice === 'Saks') ||
    (playerChoice === 'Saks' && computerChoice === 'Papir') ||
    (playerChoice === 'Papir' && computerChoice === 'Stein')
  ) {
    playerScore++;
    return "Du vant!";
  }
  computerScore++;
  return "Datamaskinen vant!";
}

// Funksjon for å oppdatere resultat og poengsum på siden
function updateUI(playerChoice, computerChoice, result) {
  document.getElementById('result').textContent = 
    `Du valgte: ${playerChoice}, Datamaskinen valgte: ${computerChoice}. ${result}`;
  document.getElementById('score').textContent = 
    `Poeng - Du: ${playerScore}, Datamaskinen: ${computerScore}`;
}

// Funksjon for å spille spillet
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  updateUI(playerChoice, computerChoice, result);
}

// Legg til event listeners på knappene
document.querySelectorAll('#buttons button').forEach(button => {
  button.addEventListener('click', () => {
    playGame(button.textContent);
  });
});
