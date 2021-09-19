var elForm = document.querySelector('.form-name');
var elInput = elForm.querySelector('.input-name');
var PIYODA = 5;
var Velosipedda = 30;
var MASHINADA = 70;

var resultOne = document.querySelector('.div-1');
var resultTwoo = document.querySelector('.div-2');
var resultThre = document.querySelector('.div-3');

elForm.addEventListener("submit", function(evt) {
evt.preventDefault();

var input = parseFloat(elInput.value.trim(), 10);
elInput.focus();

var follow = (input / PIYODA).toFixed(1);
var followOne = (input / Velosipedda).toFixed(1);
var followTwo = (input / MASHINADA).toFixed(1);

resultOne.textContent = `${follow}  soatda`;
resultTwoo.textContent = `${followOne}  soatda`;
resultThre.textContent = `${followTwo}  soatda`;
})