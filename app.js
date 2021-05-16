const express = require('express');

const app = express();

app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '');
    next();
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/', (req, res) => {
    res.send('valid')
});

app.listen(3000);
