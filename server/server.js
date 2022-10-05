const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

console.log('in server')

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('server is running on port', PORT);
});