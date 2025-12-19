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
  console.log("RESULTADOS FINALES");

  for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i] + " - Nota: " + notas[i]);

    if (notas[i] >= 6) {
      console.log("Estado: APROBADO");
    } else {
      console.log("Estado: DESAPROBADO");
    }
  }
}


alert("Bienvenido al sistema de notas");

while (contador < CANTIDAD_ALUMNOS) {
  let alumno = pedirAlumno("Ingresá el nombre del alumno");
  let nota = pedirNota("Ingresá la nota del alumno");

  if (alumno === "" || isNaN(nota)) {
    alert("Datos inválidos. Intente nuevamente.");
  } else {
    alumnos.push(alumno);
    notas.push(nota);
    contador++;
    alert("Alumno cargado correctamente");
  }
}

mostrarResultados(alumnos, notas);
alert("Revisá la consola para ver los resultados");
