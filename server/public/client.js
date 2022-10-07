$(document).ready(onReady);

let equations = [];

function onReady() {
    console.log('in jquery');

    $('#equals').on('click', onInput);
    // $('#equals').on('click', onOutput);
}

function onInput(evt) {
    evt.preventDefault();

    let inputValues = {
        first: $('#num1').val(),
        second: $('#num2').val(),
        // operator: $('.math').click(e => e.preventDefault())
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
    
    $('#num1').val('');
    $('#num2').val('');
}

function onOutput(evt) {
    evt.preventDefault();

    $.ajax({
        url: '/output',
        method: 'GET'
    })
        .then(response => {
            console.log('GET output', response);

            equations = response;
        })
};