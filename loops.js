// let i = 1;

// function ejercicio24() {
//   for (let i = 1; i >= -10; i--) {
//     console.log(i + "for");
//   }

//   let a = 1;
//   while (a <= 10) {
//     console.log(a + "while");
//     a++;
//   }
// }

// ejercicio24();

// const precios = [50, 80, 100, 120, 100];

// for (let i in precios) {
//   console.log(precios[i]);
// }

// precios.map((precio) => {
//   console.log(precio);
// });

// function ejercicio27() {
//   let i = 1;
//   const pares = [];
//   const impares = [];
//   const nombre = "Manuel";

//   var sumaImpares = 0;
//   var sumaPares = 0;

//   for (i; i <= 20; i++) {
//     if (i % 2 === 0) {
//       pares.push(i);
//       sumaPares = sumaPares + i;
//     } else {
//       impares.push(i);
//       sumaImpares = sumaImpares + i;
//     }
//   }

//   return { pares, impares, nombre, sumaImpares, sumaPares };
// }

// // const { pares, impares, nombre, sumaImpares, sumaPares } = ejercicio27();

// function ejercicio27Switch() {
//   let i = 1;
//   const pares = [];
//   const impares = [];

//   var sumaImpares = 0;
//   var sumaPares = 0;
//   while (i <= 20) {
//     switch (i % 2 === 0) {
//       case true:
//         pares.push(i);
//         sumaPares = sumaPares + i;
//         break;
//       case false:
//         impares.push(i);
//         sumaImpares = sumaImpares + i;
//         break;
//     }
//     i++;
//   }

//   return { pares, impares, sumaImpares, sumaPares };
// }

// const { pares, impares, sumaImpares, sumaPares } = ejercicio27Switch();

// console.log("La suma de los numeros pares es: " + sumaPares);
// console.log("La suma de los numeros impares es: " + sumaImpares);

// function myBoton(label, disabled, onClick) {
//   console.log("Mi label es: " + label);
//   console.log("El boton esta deshabilitado? " + disabled);

//   console.log("Cada vez que hago click, se ejectura" + onClick());
// }

function siguientePagina() {
  return "Tendria que llevarme a la siguiente pagina";
}

function abrirElMenu() {
  return "Este boton, abriria mi menu";
}

const myBoton = (label, disabled, onClick) => {
  console.log("Mi label es: " + label);
  console.log("El boton esta deshabilitado? " + disabled);
  console.log("Cada vez que hago click, se ejectura" + onClick());

  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

myBoton("Primario", true, siguientePagina);
myBoton("Secundario", false, abrirElMenu);
