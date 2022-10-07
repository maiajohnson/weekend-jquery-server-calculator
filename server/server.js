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

    equations.push(req.body);
    console.log('the values are now:', equations);

    res.sendStatus(201);
});

function doMath() {
    let result;
    let first = $('#num1').val();
    let second = $('#num2').val();

    if ($('#add').on('click')) {
        result = first + second;
        return result;
    } else if ($('#subtract').on('click')) {
        result = first - second;
        return result;
    } else if ($('#multiply').on('click')) {
        result = first * second;
        return result;
    } else if ($('#divide').on('click')) {
        result = first / second;
        return result;
    }
}

app.get('/output', (req, res) => {
    console.log('in GET input');

    doMath();
    equations.push(result);
    res.send(equations);
})