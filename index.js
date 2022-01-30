const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hi love')
});

app.post('/reigister', (req, res) => {
    res.send('Register  is successful')
});

app.post('/login', (req, res) => {
    res.send('Login is successful')
});

app.listen(port, () => {
    console.log("Server is listening on port 4000...")
});