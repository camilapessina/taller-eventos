document.addEventListener('DOMContentLoaded', function() {

const miDiv = document.getElementById('midiv');
const miBoton = document.getElementById('boton');

function ClickEnDiv() {
    alert('Hola! Soy el div');
}

function clickEnBoton(evento) {
    evento.stopPropagation(); 
    alert('Hola!!');
}

miDiv.addEventListener('click', ClickEnDiv);
miBoton.addEventListener('click', clickEnBoton);

})