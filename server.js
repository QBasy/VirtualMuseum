const express = require('express');
const app = express();

const port = 1234;

app.use(express.static(__dirname + '/files'));

app.get(('/'), (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, () => {
    console.log(`Server is working on port ${port}`);
})