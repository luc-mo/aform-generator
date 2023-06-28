var btnAbrirPopUp = document.getElementById('btnAbrirPopUp');
var btnCerrarPopUp = document.getElementById('btnCerrarPopUp');
var overlay = document.getElementById('overlay');

btnAbrirPopUp.addEventListener('click', function() {
    overlay.style.display = 'block';
});

btnCerrarPopUp.addEventListener('click', function() {
    overlay.style.display = 'none';
});