let listaNumeros = [];


let formulario = document.getElementById("formulario");
let numero = document.getElementById("numero");

let lista = document.getElementById("lista");
let suma = document.getElementById("suma");
let promedio = document.getElementById("promedio");
let mayor = document.getElementById("mayor");
let menor = document.getElementById("menor");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (numero.value.trim() === "") {
        alert("Ingrese un número");
        numero.style.backgroundColor="#f7a9a9"
    } else {
        let valor = parseFloat(numero.value);
        numero.style.backgroundColor="#ffff"
        listaNumeros.push(valor);
        numero.value = "";
        mostrarResultados();
    }
});

function mostrarResultados() {
    lista.innerHTML = "";

    let total = 0;
    let numMayor = listaNumeros[0];
    let numMenor = listaNumeros[0];

    for (let i = 0; i < listaNumeros.length; i++) {
        lista.innerHTML += `<li>${listaNumeros[i]}</li>`;
        total += listaNumeros[i];

        if (listaNumeros[i] > numMayor) {
            numMayor = listaNumeros[i];
        }

        if (listaNumeros[i] < numMenor) {
            numMenor = listaNumeros[i];
        }
    }

    let media = total / listaNumeros.length;

    suma.textContent = `Suma: ${total}`;
    promedio.textContent = `Promedio: ${media.toFixed(2)}`;
    mayor.textContent = `Número mayor: ${numMayor}`;
    menor.textContent = `Número menor: ${numMenor}`;
}