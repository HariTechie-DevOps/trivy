const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res) => {
    const token = jwt.sign({user:'admin'}, 'secret');
    res.send(token);
});

app.listen(3001, () => {
    console.log('Auth service running');
});
