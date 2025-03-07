const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./users.db');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // For static files like CSS
app.set('view engine', 'ejs');

// Create users table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)`);

// Home route - Display users
app.get('/', (req, res) => {
    db.all('SELECT * FROM users', [], (err, users) => {
        if (err) {
            return res.status(500).send('Database error');
        }
        res.render('index', { users });
    });
});

// Add user route
app.post('/add', (req, res) => {
    const { name, email } = req.body;

    if (!email) {
        return res.send('<script>alert("E-post er påkrevd!"); window.history.back();</script>');
    }

    db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err) => {
        if (err) {
            return res.send('<script>alert("Feil: E-posten er kanskje allerede i bruk."); window.history.back();</script>');
        }
        res.redirect('/');
    });
});

// Delete user route
app.post('/delete', (req, res) => {
    const { id } = req.body;
    db.run('DELETE FROM users WHERE id = ?', [id], (err) => {
        if (err) {
            return res.status(500).send('Feil ved sletting av bruker');
        }
        res.redirect('/');
    });
});

// Start server
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});
