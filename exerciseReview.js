// function imprimir(car, cumpleConLaCondicion) {
//   if (cumpleConLaCondicion) {
//     console.log(car.model);
//     console.log(car.brand);
//   } else {
//     console.log(car.model, "No cumple con las pautas indicadas");
//     console.log(car.brand, "No cumple con las pautas indicadas");
//   }
// }
// //Creo mi funcion
// function refactorCars(carsArray, imprimirCallback) {
//   // La funcion .map recorre el array y devuelve un valor especifico

//   var carWithLongestModel = { brand: "", model: "", year: 0 }; //length 0
//   var carWithBiggerYear = { brand: "", model: "", year: 0 }; //length 0

//   const currentYear = 2023;
//   const lastYear = 2008;

// for (let i = 0; i < carsArray.length; i++) {
//   const isBetween =
//     currentYear > carsArray[i].year && lastYear < carsArray[i].year;

//   if (i === 0) {
//     console.log(carsArray[i].brand);
//   }

//   if (carsArray[i].model.length > carWithLongestModel.model.length) {
//     carWithLongestModel = carsArray[i];
//   }

//   if (carsArray[i].year > carWithBiggerYear.year) {
//     carWithBiggerYear = carsArray[i];
//     const preFijo = carWithLongestModel.model.slice(0, 4);
//     console.log(preFijo + "...");
//   }

// }

// for (let car of carsArray) {
//   console.log(car.model);

//   console.log(car.model.indexOf("A4"));
// }
// }

//Creo mi array de objecto autos
// const carsArray = [
//   { brand: "", model: "A4", year: 1999 },
//   { brand: "", model: "RX-7", year: 2001 },
//   { brand: "Mercedez Benz", model: "Compressor X", year: 2009 },
//   { brand: "Mercedez Benz", model: "Compressor", year: 2010 },
// ];
// //Array de string
// const beasts = ["ant", "bison", "camel", "duck", "bison"];
// beasts.forEach((beast, i, arrayEnteroDeBeasts) => {
//   console.log(beast);
//   switch (beast) {
//     case "ant":
//       console.log(beast, "esta en el indice", i);
//       break;
//     case "bison":
//       console.log(beast, "esta en el indice", i);
//       break;
//     case "camel":
//       console.log(beast, "esta en el indice", i);
//       break;
//     case "duck":
//       console.log(beast, "esta en el indice", i);
//       break;
//   }
// });

//Ejercicio a realizar por ustedes!
function obtenerNumeroMasGrande(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

//Cuando ejecuto Run Code, esta es la parte de codigo que ustedes no ven
function main() {
  if (obtenerNumeroMasGrande(1, 2) === 2) {
    console.log("Test realizado con exito");
  } else {
    console.log("Error en el codigo");
  }
  if (obtenerNumeroMasGrande(1, -1) === 1) {
    console.log("Test realizado con exito");
  } else {
    console.log("Error en el codigo");
  }
}

main();

// const arrayDeResultados = [];
// carsArray.forEach((car, i) => {
//   switch (Boolean(car.brand)) {
//     case false:
//       // console.log(car, "esta en el indice", i);
//       arrayDeResultados.push(car);
//       break;
//     case true:
//       // console.log(car, "esta en el indice", i);
//       break;
//   }
// });

// console.log(arrayDeResultados);
// // Dado que mi funcion retorna un array
// Tengo que guardar el valor retornado en una constante para luego imprimirlo
// refactorCars(carsArray, imprimir);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const autoNumbers = (i, max) => {
//   const newArray = [];
//   for (i; i < max; i++) {
//     newArray.push(i);
//   }

//   return newArray;
// };

// function refactorNumbersArray(arrayNumbers) {
//   const newArray = [];

//   arrayNumbers.forEach((number) => {
//     //Inizializo la varible isPrime como true
//     var isPrime = true;

//     //Si le numero es igual o mayor a dos entro al if
//     if (number >= 2) {
//       //Divido cada numero, por los numeros anteriores pero no por si mismo

//       let i = 2;
//       while (i < number) {
//         if (number % i === 0) {
//           isPrime = false;
//         }
//         i++;
//       }
//     } else {
//       isPrime = false;
//     }
//     if (isPrime) newArray.push(number);
//   });

//   return newArray;
// }

// const del1al500 = refactorNumbersArray(autoNumbers(0, 500));
// const del500al1000 = refactorNumbersArray(autoNumbers(501, 1000));
// console.log(del1al500);
// console.log(del500al1000);
