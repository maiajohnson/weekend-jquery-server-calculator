$(document).ready(onReady);

let equations = [];
let operator;

function onReady() {
    console.log('in jquery');

    $('#equals').on('click', onInput);
    $('#clear').on('click', onClear);
    $('.math').on('click', getOperator);
}

function onInput(evt) {
    evt.preventDefault();

    let inputValues = {
        first: $('#num1').val(),
        second: $('#num2').val(),
        symbol: operator
    };

    console.log('in onCalculate', inputValues);

    $.ajax({
        url: '/input',
        method: 'POST',
        data: inputValues
    })
        .then(response => {
            console.log('POST inputValues', response);
            onOutput();
        })

        .catch((err) => {
            console.log('POST inputValues error', err);
        })
    
      
    };

function getOperator() {
    console.log($(this).text());

    operator = $(this).text();
}

function onOutput() {

    $.ajax({
        url: '/output',
        method: 'GET'
    })
        .then(response => {
            console.log('GET output', response);

            equations = response;
            render(equations);
        })
        .catch((err) => {
            console.log('GET output error', err);
        })
};

function onClear() {

    $('#num1').val('');
    $('#num2').val('');

};

function render(equations) {
    $('.total').empty();
    $('ul').empty();

    for (let i=0; i < equations.length; i++) {
         $('.total').empty();
        $('.total').append(`
           ${equations[i].answer}
        `)
    };

    for (let i=0; i < equations.length; i++) {
        $('ul').append(`
            <li>${equations[i].first} ${equations[i].symbol} ${equations[i].second} = ${equations[i].answer}</li>
        `)
    };
}