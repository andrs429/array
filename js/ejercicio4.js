let estudiantes = [
    "Carlos Pérez",
    "María Gómez",
    "Juan Rodríguez",
    "Laura Martínez",
    "Andrés López",
    "Camila Torres",
    "Santiago Ramírez",
    "Valentina Herrera"
];

let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let lista = document.getElementById("lista");
let mensaje = document.getElementById("mensaje");

function mostrarEstudiantes() {
    lista.innerHTML = "";

    for (let i = 0; i < estudiantes.length; i++) {
        lista.innerHTML += `<li>${estudiantes[i]}</li>`;
    }
}

mostrarEstudiantes();

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nombre.value.trim() === "") {
        alert("Ingrese un nombre para buscar");
        nombre.style.backgroundColor = "#f7a9a9";
        mensaje.textContent = "";
    } else {
        nombre.style.backgroundColor = "#ffff";

        let busqueda = nombre.value.trim().toLowerCase();

        let encontrado = estudiantes.find(function(estudiante) {
            return estudiante.toLowerCase().includes(busqueda);
        });

        if (encontrado) {
            mensaje.textContent = `El estudiante ${encontrado} está registrado`;
        } else {
            mensaje.textContent = "El estudiante no se encuentra registrado";
        }

        nombre.value = "";
    }
});