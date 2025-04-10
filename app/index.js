const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello from DevOps Mini Project!');
    res.status(200).send('Signup page working!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

