document.addEventListener('DOMContentLoaded', function() {

const miDiv = document.getElementById('midiv');

function ClickEnDiv() {
    alert('Hola! Soy el div');
}

miDiv.addEventListener('click', ClickEnDiv);

})