const express = require('express');
const port = 4000;
const Fortune = require('./models/fortune');

const app = express();



app.get('/fortune',async (req, res) => {
    console.log('Sending the home page I guess');
    res.send(await Fortune.getRandom());
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});