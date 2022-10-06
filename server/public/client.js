$(document).ready(onReady);

function onReady() {
    console.log('in jquery');

    $('#equals').on('click', onInput);
}

function onInput(evt) {
    evt.preventDefault();

    let inputValues = {
        first: $('#num1').val(),
        second: $('#num2').val(),
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