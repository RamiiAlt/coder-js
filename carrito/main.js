


const inputProducto = document.getElementById("inputProducto");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("listaProductos");
const totalProductos = document.getElementById("totalProductos");
const btnVaciar = document.getElementById("btnVaciar");
const btnComprar = document.getElementById("btnComprar");

// ARRAY DE PRODUCTOS 
let productos = JSON.parse(localStorage.getItem("productos")) || [];

// Validar compatibilidad: convertir strings a objetos si es necesario
productos = productos.map(producto => {
    if (typeof producto === "string") {
        return { nombre: producto, precio: 0 };
    }
    return producto;
});

// MOSTRAR PRODUCTOS
function mostrarProductos() {
    lista.innerHTML = "";

    for (let i = 0; i < productos.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `<span>${productos[i].nombre}</span> <span class="precio-producto">$${productos[i].precio.toFixed(2)}</span> <button class="btnEliminar" onclick="eliminarProducto(${i})">Eliminar</button>`;
        lista.appendChild(li);
    }

    // Actualizar total
    totalProductos.textContent = productos.length;
    
    // Actualizar total del dinero
    calcularTotal();
}

// ELIMINAR PRODUCTO
function eliminarProducto(index) {
    productos.splice(index, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos();
}

// AGREGAR PRODUCTO
function agregarProducto(nombre, precio = 0) {
    if (nombre !== "") {
        productos.push({ nombre, precio });
        localStorage.setItem("productos", JSON.stringify(productos));
        mostrarProductos();
    }
}

// CALCULAR TOTAL DEL DINERO
function calcularTotal() {
    let totalDinero = productos.reduce((suma, producto) => suma + producto.precio, 0);
    let totalDineroElement = document.getElementById("totalDinero");
    
    // Si no existe el elemento, crearlo
    if (!totalDineroElement) {
        const carritoInfo = document.querySelector(".carrito-info");
        const p = document.createElement("p");
        p.id = "totalDinero";
        p.innerHTML = `Total a pagar: <span>$${totalDinero.toFixed(2)}</span>`;
        carritoInfo.appendChild(p);
    } else {
        totalDineroElement.innerHTML = `Total a pagar: <span>$${totalDinero.toFixed(2)}</span>`;
    }
}

//  BOTÓN AGREGAR
btnAgregar.addEventListener("click", () => {
    const nombre = inputProducto.value.trim();

    if (nombre !== "") {
        // Buscar el precio del producto en el HTML
        const card = document.querySelector(`.card[data-producto="${nombre}"]`);
        let precio = 0;
        
        if (card) {
            const precioText = card.querySelector(".precio").textContent;
            precio = parseFloat(precioText.replace("$", ""));
        }
        
        agregarProducto(nombre, precio);
        inputProducto.value = "";
    } else {
        alert("Ingrese un producto válido");
    }
});


inputProducto.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        btnAgregar.click();
    }
});

// BOTÓN VACIAR CARRITO
btnVaciar.addEventListener("click", () => {
    if (productos.length > 0) {
        if (confirm("¿Estás seguro de que deseas vaciar el carrito?")) {
            productos = [];
            localStorage.setItem("productos", JSON.stringify(productos));
            mostrarProductos();
        }
    } else {
        alert("El carrito ya está vacío");
    }
});

// BOTÓN COMPRAR
btnComprar.addEventListener("click", () => {
    if (productos.length > 0) {
        const totalDinero = productos.reduce((suma, producto) => suma + producto.precio, 0);
        alert(`¡Gracias por tu compra!\nTotal de productos: ${productos.length}\nTotal a pagar: $${totalDinero.toFixed(2)}\n\nTus productos se han guardado y serán procesados pronto.`);
        productos = [];
        localStorage.setItem("productos", JSON.stringify(productos));
        mostrarProductos();
    } else {
        alert("Tu carrito está vacío. Agrega productos antes de comprar.");
    }
});

// CLIC EN IMÁGENES DE PRODUCTOS
document.querySelectorAll(".producto-imagen").forEach(imagen => {
    imagen.addEventListener("click", () => {
        const card = imagen.closest(".card");
        const nombre = card.dataset.producto;
        const precioText = card.querySelector(".precio").textContent;
        const precio = parseFloat(precioText.replace("$", ""));
        agregarProducto(nombre, precio);
        
        document.querySelector(".carrito").scrollIntoView({ behavior: "smooth" });
    });
});

// CARGAR PRODUCTOS AL INICIAR
mostrarProductos();
