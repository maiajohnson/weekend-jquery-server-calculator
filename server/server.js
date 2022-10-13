const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
let equations = [];

console.log('in server')

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('server is running on port', PORT);
});

app.post('/input', (req, res) => {
    console.log('inputvalues', req.body);

    doMath(req.body);
    console.log('the equations are now', equations);
    res.sendStatus(201);
});

function doMath(math) {
    console.log(math.symbol);

   if (math.symbol === '+') {
    math.answer = Number(math.first) + Number(math.second);
   }
   else if (math.symbol === '-') {
    math.answer = Number(math.first) - Number(math.second);
   }
   else if (math.symbol === '*') {
    math.answer = Number(math.first) * Number(math.second);
   }
   else if (math.symbol === '/') {
    math.answer = Number(math.first) / Number(math.second);
   };

   equations.push(math);
}

app.get('/output', (req, res) => {
    console.log('in GET input');

    res.send(equations);
})