document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Forhindrer at skjemaet sendes på vanlig måte

    // Hent verdiene fra alle spørreskjemaene
    const answers = {
        question1: document.getElementById('question1').value,
        question2: document.getElementById('question2').value,
        question3: document.getElementById('question3').value,
        question4: document.getElementById('question4').value,
        question5: document.getElementById('question5').value,
        question6: document.getElementById('question6').value,
        question7: document.getElementById('question7').value,
        question8: document.getElementById('question8').value,
        question9: document.getElementById('question9').value,
        question10: document.getElementById('question10').value
    };

    // Eksempler på hvordan du kan lagre og vise svarene som statistikk
    const statsList = document.getElementById('statsList');
    statsList.innerHTML = ''; // Tømmer gamle statistikker

    for (let question in answers) {
        const li = document.createElement('li');
        li.textContent = `${question}: ${answers[question]}`;
        statsList.appendChild(li);
    }

    // Vist statistikk seksjon
    document.getElementById('statistics').style.display = 'block';
});
document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Forhindrer at skjemaet sendes på vanlig måte

    // Hent verdiene fra alle spørreskjemaene
    const answers = {
        question1: document.getElementById('question1').value,
        question2: document.getElementById('question2').value,
        question3: document.getElementById('question3').value,
        question4: document.getElementById('question4').value,
        question5: document.getElementById('question5').value,
        question6: document.getElementById('question6').value,
        question7: document.getElementById('question7').value,
        question8: document.getElementById('question8').value,
        question9: document.getElementById('question9').value,
        question10: document.getElementById('question10').value
    };

    // Funksjon for å generere tilfeldig prosent mellom 11% og 87%
    function getRandomPercentage() {
        return Math.floor(Math.random() * (87 - 11 + 1)) + 11;
    }

    // Eksempler på hvordan du kan lagre og vise svarene som statistikk med prosentandel
    const statsList = document.getElementById('statsList');
    statsList.innerHTML = ''; // Tømmer gamle statistikker

    for (let question in answers) {
        const li = document.createElement('li');
        const percentage = getRandomPercentage(); // Få tilfeldig prosentandel
        li.innerHTML = `${question}: ${answers[question]} - <span class="percentage">${percentage}%</span>`;
        statsList.appendChild(li);
    }

    // Vist statistikk seksjon
    document.getElementById('statistics').style.display = 'block';
});
