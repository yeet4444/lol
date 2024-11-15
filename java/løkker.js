
//for (let i = 1; i>9; i += 1){
//console.log (i)
   
  document.getElementById("addTaskButton").addEventListener("click", addtask);

   function addtask() {
       let task = document.getElementById("taskInput").value; 

       let listItem = document.createElement("li");
       listItem.textContent = task;

      document.getElementById("taskList").appendChild(listItem);
    }
   function tellBokstaver(str) {

      teller små bokstaver i en streng
      
      



  <title>Stein, Saks, Papir</title>


  <script>
    // Funksjon for å velge datamaskinens valg
    function getComputerChoice() {
      return ['stein', 'saks', 'papir'][Math.floor(Math.random() * 3)];
    

    // Funksjon for å avgjøre vinneren
    function determineWinner(player, computer) {
      if (player === computer) return "Uavgjort!";
      if (
        (player === 'stein' && computer === 'saks') ||
        (player === 'saks' && computer === 'papir') ||
        (player === 'papir' && computer === 'stein')
      ) return "Du vant!";
      return "Datamaskinen vant!";
    

    // Poengsum
    let playerScore = 0, computerScore = 0;

    // Funksjon for å lage grensesnittet
    function createUI() {
      // Legger til tittel
      document.body.innerHTML = `<h1>Stein, Saks, Papir</h1>`;
      
      // Legger til knapper for valg
      ['stein', 'saks', 'papir'].forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
        button.onclick = () => playGame(choice); // Funksjon som håndterer valget
        document.body.appendChild(button);
      

      // Resultat- og poengfelt
      document.body.innerHTML += `<p id="result"></p>`;
      document.body.innerHTML += `<p id="score"></p>`;
    

    // Funksjon for å spille spillet
    function playGame(playerChoice) {
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      
      // Oppdater poeng
      playerScore += result === "Du vant!" ? 1 : 0;
      computerScore += result === "Datamaskinen vant!" ? 1 : 0;

      // Vis resultat og oppdater poeng
      document.getElementById('result').textContent = `Du: ${playerChoice}, Datamaskinen: ${computerChoice}. ${result}`;
      document.getElementById('score').textContent = `Poeng - Du: ${playerScore}, Datamaskinen: ${computerScore}`;
    

    // Kjør når siden lastes
    createUI();
  </script>


      
      

   