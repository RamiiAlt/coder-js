console.log("JS cargado correctamente");

// VARIABLES DOM
const inputProducto = document.getElementById("inputProducto");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("listaProductos");

// ARRAY DE PRODUCTOS (localStorage)
let productos = JSON.parse(localStorage.getItem("productos")) || [];

// MOSTRAR PRODUCTOS
function mostrarProductos() {
    lista.innerHTML = "";

    for (let producto of productos) {
        const li = document.createElement("li");
        li.textContent = producto;
        lista.appendChild(li);
    }
}

// EVENTO BOTÓN
btnAgregar.addEventListener("click", () => {
    const nombre = inputProducto.value.trim();

    if (nombre !== "") {
        productos.push(nombre);
        localStorage.setItem("productos", JSON.stringify(productos));
        inputProducto.value = "";
        mostrarProductos();
    } else {
        alert("Ingrese un producto válido");
    }
});

// CARGAR PRODUCTOS AL INICIAR
mostrarProductos();
