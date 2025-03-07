const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Sikrer riktig sti til views-mappen

const db = new sqlite3.Database('database.db');

app.get('/', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Database error!");
        } else {
            res.render('hovedfilen_for', { users: rows }); // Endret til riktig filnavn
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}/`);
});
