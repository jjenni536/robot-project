const http = require(`http`)


// http.createServer((req, res) => {
// res.end(`working`);
// }).listen(3000)

const express = require('express');
const app = express();

app.get('/,', (req, res) => {
res.send(
    '<h1>welcome</h1>'
)
})

app.listen(3000);