//console.log("hei verden")

//navn = ("stian")
//console.log("hei",navn)


//a = (20)
//b = (10)
//console.log(a + b)

//frukt = ["hund","eple","cat"]

//console.log(frukt[0],frukt[2])

//frukt = ["eple","cat"]
//console.log(frukt)
//frukt.push("hund")
//console.log(frukt)
//frukt.pop()
//console.log(frukt)


//function welcome(navn){
  //  console.log("velcome, " + navn)
//}
//welcome("stian")

//dyr = ["hund","cat"]
//console.log (dyr.length)
//farger = ("green","green","gul")
//function gul(farger){
   // if (farger.includes("gul")){
   //     console.log ("listen har gul");
   // } else {
 //       console.log ("listen har ikke gul")
  //  }
//}
//gul(farger)

//x=4 
//console.log (x*x)



// rockPaperScissors.js

// Funksjon som velger et tilfeldig valg for datamaskinen
function getComputerChoice() {
  const choices = ['stein', 'saks', 'papir'];
  return choices[Math.floor(Math.random() * 3)];
}

// Funksjon som avgjør vinneren
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "Uavgjort!";
  if (
    (playerChoice === 'stein' && computerChoice === 'saks') ||
    (playerChoice === 'saks' && computerChoice === 'papir') ||
    (playerChoice === 'papir' && computerChoice === 'stein')
  ) return "Du vant!";
  return "Datamaskinen vant!";
}

// Poengsum
let playerScore = 0, computerScore = 0;

// Hovedspillfunksjon
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  console.log(`Du valgte: ${playerChoice}`);
  console.log(`Datamaskinen valgte: ${computerChoice}`);
  console.log(result);

  if (result === "Du vant!") playerScore++;
  if (result === "Datamaskinen vant!") computerScore++;

  console.log(`Poeng - Du: ${playerScore}, Datamaskinen: ${computerScore}`);
}

// Eksempel på å spille
playGame('stein');  // Du kan endre 'stein' til 'saks' eller 'papir'


