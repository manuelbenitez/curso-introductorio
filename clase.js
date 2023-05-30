let hello = "Ciao"; //boolean
let age = 0; //string
let isGraduated = true; //number

// console.log(Number(hello));
// console.log(Boolean(age));
// console.log(String(isGraduated));
// console.log(age);
// console.log(!isNaN(age));
// console.log(!isNaN(hello));
// console.log(!isNaN(isGraduated));

// console.log(name == apellido);
// console.log(age <= average);
// console.log(firstYearCompleted == apellido);
// console.log(yearsCompleted !== firstYearCompleted);
// console.log(examsCompleted < age);
// console.log(isGraduated > yearsCompleted);

// console.log(10 > 9);
// console.log(45 >= 34);
// console.log(true == "1");
// console.log(false == "0");
// console.log(1 !== 0);
// console.log(4 >= 2);
// console.log(4 <= 8);

function d(variableAImprimir) {
  console.log(variableAImprimir);
}

// d("cualquier valor");

const nombre = "Mario";
const apellido = "Rossi";
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 3;

function informacionDelAlumno(
  nombre,
  apellido,
  average,
  examsCompleted,
  firstYearCompleted,
  yearsCompleted
) {
  let esValida = false;
  // if (Boolean(nombre) && isNaN(nombre)) {
  //   d("El usuario ingreso el Nombre correctamente y no ha ingresado un numero");
  //   esValida = true;
  // } else {
  //   esValida = false;
  // }

  //Esta funcion checkea si el appelido fue ingresado y si no es un numero
  if (Boolean(apellido) && isNaN(apellido)) {
    d("El usuario ingreso el apellido y el usuario no ha ingresado un numbero");
    esValida = true;
  } else {
    esValida = false;
  }

  if (average > 20 && average < 30) {
    d("Dar un premio");
  }

  if (examsCompleted) {
    d("El usuario ha completado " + examsCompleted + " examenes");
  }

  if (firstYearCompleted) {
    d("El usuario ha completado " + yearsCompleted + " años");

    d(
      String(nombre)
        .concat(" ha completado ")
        .concat(yearsCompleted)
        .concat(" años")
    );
  }

  return esValida;
}

const elFormularioEsValid = informacionDelAlumno(
  nombre,
  apellido,
  average,
  examsCompleted,
  firstYearCompleted,
  yearsCompleted
);

console.log("El Formulario es valido: " + elFormularioEsValid);
