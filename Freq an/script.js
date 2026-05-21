//Referencias a elementos HTML
const inputFrecuencia = document.getElementById("frecuencia");
const boton = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

//Evento del botón
boton.addEventListener("click", calcularAngular);

function calcularAngular(){

    //Obtener valor ingresado
    const f = parseFloat(inputFrecuencia.value);

    //Validaciones
    if (isNaN(f)){
        resultado.textContent = "Ingrese un número válido.";
        resultado.style.color = "red";
        return;
    }

    if (f <= 0){
        resultado.textContent = "La frecuencia debe ser mayor a 0 Hz.";
        resultado.style.color = "red";
        return;
    }

    //Fórmula de Frecuencia Angular (2 * PI * f)
    const omega = 2 * Math.PI * f;

    //Mostrar resultado
    resultado.textContent = `w = ${omega.toFixed(2)} rad/s`;
    resultado.style.color = "green";
}