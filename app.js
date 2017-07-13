const express = require('express');
const bodyParser = require('body-parser');

const books = [
    { id: 1, title: 'Book 1', desc: 'Desc of book 1' },
    { id: 2, title: 'Book 2', desc: 'Desc of book 2' },
    { id: 3, title: 'Book 3', desc: 'Desc of book 3' },
    { id: 4, title: 'Book 4', desc: 'Desc of book 4' },
    { id: 5, title: 'Book 5', desc: 'Desc of book 5' }
];

const app = express();

app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.json(books).end();
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

module.exports = { app };