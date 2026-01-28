const inputProducto = document.getElementById("producto");
const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("lista");

let productos = JSON.parse(localStorage.getItem("productos")) || [];

// Mostrar productos al cargar
mostrarProductos();

botonAgregar.addEventListener("click", () => {
    const nombre = inputProducto.value;

    if (nombre !== "") {
        productos.push(nombre);
        localStorage.setItem("productos", JSON.stringify(productos));
        inputProducto.value = "";
        mostrarProductos();
    }
});

function mostrarProductos() {
    lista.innerHTML = "";

    for (let producto of productos) {
        const li = document.createElement("li");
        li.textContent = producto;
        lista.appendChild(li);
    }
}
