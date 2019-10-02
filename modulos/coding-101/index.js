alert("Hola!")
var nombre = prompt("¿Como te llamas?")

var elem = document.getElementById("saludo")
elem.innerHTML = "Hola " + nombre
elem.style.color = "red"