const express = require('express');
const app = express();
const port = 5050;

app.get('/hello', (req, res) => {
    res.send('Hello from DevOps Mini Project!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
