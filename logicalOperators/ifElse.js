//Ejericio 12
// console.log("testing" == "testing" && "Mario" == "Cool Guy");

// const question1 = 101 < 67; //false
// const question2 = 1 == true; //true
// const question3 = true != 1; //false
// const question4 = 4 <= 4; //true

// const elFormularioEsValido = true;

// if (elFormularioEsValido) {
//   console.log("Todo bien");
// } else if (!elFormularioEsValido) {
//   console.log("Ingrese los datos nuevamente");
// }

// console.log(question1 || question2); //the result must be true
// console.log(question1 && question2); //the result must be false
// console.log(question3 || question2); //the result must be true
// console.log(question4 == !question4); //the result must be false
// console.log(question2 == !question4); //the result must be false

// console.log("Mi numero 4");

// Ejercicio 15

// var age = 20;
// var esMayor = age >= 18;
// var esUnNumero = !isNaN(18);

// age >= 18
//   ? console.log("You can drive")
//   : console.log("You are too young to drive");

// age >= 18 && console.log("You can drive");
// age < 18 && console.log("You are too young");

// if (esMayor && esUnNumero) {
//   console.log("You can drive a car");
// } else {
//   console.log("You are too young to drive");
// }

// //Ejercicio 16

// const isSunnyDay = true;
// const isHomeworkCompleted = false;

// const result =
//   isSunnyDay && isHomeworkCompleted ? "Puedo salir a jugar" : "No puedo";

// // console.log(result);

// if (isSunnyDay && isHomeworkCompleted) {
//   console.log("Jesse can go out to play");
// } else {
//   console.log("Jesse stays at home");
// }

// isSunnyDay && isHomeworkCompleted
//   ? console.log("Jesse can go out to play")
//   : console.log("Jesse stays at home");

// switch (isSunnyDay) {
//   case true:
//     isHomeworkCompleted
//       ? console.log("Puede salir a jugar")
//       : console.log("No se puede salir a jugar");
//   case false:
//     isHomeworkCompleted && console.log("No se puede salir a jugar");
//     break;
// }

// //Ejericio 18

// let number = 7;

// if (number > 0) {
//   console.log("The number is positive");
// } else console.log("The number is negative");

// const resultado =
//   number > 0 ? "El numero es positivo" : "El numero es negativo";

// console.log(result);

// let priceRoomTemporadaAlta = [50, 80, 100, 120];
// let priceRoomTemporadaBaja = [40, 70, 90, 110];
// let priceRoomBasic = [50, 75, 110, 130];

// //Metodo map es igual a hacer un for()
// priceRoomBasic.map((price) => {
//   if (esTemporadaAlta) {
//     console.log("Los precios de temporada alta son: " + price + 10);
//   } else if (esTemporadaMedia) {
//     console.log("Los precios de temporada media son: " + price);
//   } else {
//     console.log("Los precios de temporada baja son" + price - 10);
//   }
// });

// const precioBasico = 10;
// const precioMedio = 20;
// const precioAlto = 30;

// const precioCocaColaBasico = 1;
// const precioCocaColaMedio = 2;
// const precioCocaColaAlto = 3;

// function misPrecios(precioBasico, precioMedio, precioAlto) {
//   console.log("Mi precio basico es de: " + precioBasico);
//   console.log("Mi precio basico es de: " + precioMedio * 0.97);
//   console.log("Mi precio basico es de: " + precioAlto * 0.9);

//   return precioBasico + precioAlto + precioMedio;
// }

// misPrecios(precioBasico, precioMedio, precioAlto);

// misPrecios(precioCocaColaBasico, precioCocaColaMedio, precioCocaColaAlto);

// var primitive = 10;

// switch (primitive) {
//   case typeof Number:
//     console.log("Es un numero");
//     break;
//   case typeof Boolean:
//     console.log("es un boolean");
//     break;
//   case typeof String:
//     console.log("es un string");
//     break;
// }

// var password = "asdas";
// var isBetween4and6 = password.length >= 4 && password.length <= 6;

// if (isBetween4and6) {
//   console.log("Password length is correct");
// } else {
//   console.log("Password not valid");
// }

// password.length >= 4 && password.length <= 6
//   ? console.log("Password length is correct")
//   : console.log("Password not valid");

