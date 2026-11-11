let productos = [];

let formulario = document.getElementById("formulario");
let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");

let tabla = document.getElementById("tabla");
let total = document.getElementById("total");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nombreValor = producto.value.trim();
    let precioValor = parseFloat(precio.value);
    let cantidadValor = parseInt(cantidad.value);

    if (nombreValor === "") {
        alert("Ingrese el nombre del producto");
        producto.style.backgroundColor = "#f7a9a9";
        return;
    }
    producto.style.backgroundColor = "#ffff";

    if (isNaN(precioValor) || precioValor <= 0) {
        alert("Ingrese un precio válido");
        precio.style.backgroundColor = "#f7a9a9";
        return;
    }
    precio.style.backgroundColor = "#ffff";

    if (isNaN(cantidadValor) || cantidadValor <= 0) {
        alert("Ingrese una cantidad válida");
        cantidad.style.backgroundColor = "#f7a9a9";
        return;
    }
    cantidad.style.backgroundColor = "#ffff";

    productos.push({
        nombre: nombreValor,
        precio: precioValor,
        cantidad: cantidadValor
    });

    producto.value = "";
    precio.value = "";
    cantidad.value = "";

    mostrarProductos();
});

function mostrarProductos() {
    tabla.innerHTML = "";

    let totalGeneral = 0;

    for (let i = 0; i < productos.length; i++) {
        let subtotal = productos[i].precio * productos[i].cantidad;
        totalGeneral += subtotal;

        let fila = document.createElement("tr");

        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = productos[i].nombre;

        let celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = productos[i].precio;

        let celdaCantidad = document.createElement("td");
        celdaCantidad.textContent = productos[i].cantidad;

        let celdaSubtotal = document.createElement("td");
        celdaSubtotal.textContent = subtotal;

        let celdaAccion = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function() {
            eliminarProducto(i);
        });
        celdaAccion.appendChild(botonEliminar);

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaCantidad);
        fila.appendChild(celdaSubtotal);
        fila.appendChild(celdaAccion);

        tabla.appendChild(fila);
    }

    total.textContent = `Total del inventario: ${totalGeneral}`;
}

function eliminarProducto(posicion) {
    productos.splice(posicion, 1);
    mostrarProductos();
}

mostrarProductos();