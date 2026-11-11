let listaNombres = []; 

let inputNombre = document.getElementById("nombre");
let btnAgregar = document.getElementById("btnAgregar");
let lista = document.getElementById("lista");
let cantidad = document.getElementById("cantidad");

btnAgregar.addEventListener("click", function(event) {
    event.preventDefault();
    let nombre = inputNombre.value.trim().toUpperCase();

    if (nombre === "") {
        alert("Ingrese un nombre");
        inputNombre.style.backgroundColor = "red";
    } else {
        if (listaNombres.includes(nombre)) {
            alert("Ese nombre ya ha sido añadido");
        } else {
            listaNombres.push(nombre);
            mostrarNombres();
        }
    
        inputNombre.value = "";
        inputNombre.focus();      
       
        inputNombre.style.backgroundColor = "white";
    }
});

function mostrarNombres() {
    lista.innerHTML = "";

    for (let i = 0; i < listaNombres.length; i++) {
        lista.innerHTML += `<li>${listaNombres[i]}</li>`;
    }

    cantidad.textContent = `Total De Nombres registrados: ${listaNombres.length}`;
}