$(document).ready(onReady);

let equations = [];

function onReady() {
    console.log('in jquery');

    $('#equals').on('click', onInput);
    $('#equals').on('click', onOutput);
    $('#clear').on('click', onClear);
}

function onInput(evt) {
    evt.preventDefault();

    let inputValues = {
        first: $('#num1').val(),
        second: $('#num2').val(),
        operator: $('.math').on('click')
        // keeps returning null value, but I'm unsure how to fix it
    };

    console.log('in onCalculate', inputValues);

    $.ajax({
        url: '/input',
        method: 'POST',
        data: inputValues
    })
        .then(response => {
            console.log('POST inputValues', response);
        })

        .catch((err) => {
            console.log('POST inputValues error', err);
        })
    
      
    };

function onOutput(evt) {
    evt.preventDefault();

    $.ajax({
        url: '/output',
        method: 'GET'
    })
        .then(response => {
            console.log('GET output', response);

            equations = response;
            render();
        })
        .catch((err) => {
            console.log('GET output error', err);
        })
};

function onClear(evt) {
    evt.preventDefault();

    $('#num1').val('');
    $('#num2').val('');

};

function render() {
    $('.total').empty();

    for (let i=0; i < equations.length; i++) {
        $('.total').append(`
           ${result}
        `)
    };

    $('ul').empty();

    for (let i=0; i < equations.length; i++) {
        $('ul').append(`
            <li>${first} `$('.math').text()` ${second} = ${result}</li>
        `)
    };
}