// CONST Y VARIABLES
const CANTIDAD_ALUMNOS = 3;
let alumnos = [];
let notas = [];
let contador = 0;

// pedir nombre del alumno
function pedirAlumno(mensaje) {
    let nombre = prompt(mensaje);
return nombre;
}

//  pedir nota
function pedirNota(mensaje) {
    let nota = Number(prompt(mensaje));
    return nota;
}

// mostrar resultados
function mostrarResultados(alumnos, notas) {
    console.log(" Resultados Finales: ");

    for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i] + " - Nota: " + notas[i]);

    if (nombre !== "") {
        productos.push(nombre);
        localStorage.setItem("productos", JSON.stringify(productos));
        inputProducto.value = "";
        mostrarProductos();
    }
}

function mostrarProductos() {
    lista.innerHTML = "";

    for (let producto of productos) {
        const li = document.createElement("li");
        li.textContent = producto;
        lista.appendChild(li);
    }
}
}
