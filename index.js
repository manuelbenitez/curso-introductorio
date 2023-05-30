// Esta variable es de tipo primitivo string
let nombre = "Manuel";
let apellido = "Benitez";
let nombreCompleto = "";

// Esta variable es de tipo primitvo number
let a = 1;
let b = 2;

// Esta variables son de tipo primitivo boolean
let falso = false;
let verdadero = true;

//Variables de tipo primitivo indefinidas o vacias

let indefinida = undefined;
let cajon = undefined;

let vacia = null;
let otroCajon = null;

function division(numerador, denominador) {
  return numerador / denominador;
}

function varTest() {
  var x = 31;
  if (true) {
    var x = 71; // ¡misma variable!
    console.log("primer var: " + x); // 71
  }
  console.log("segundo var: " + x); // 71
}

function letTest() {
  let primerNumero = 1;
  if (true) {
    let segundoNumero = 0; // variable diferente
    console.log("primer let: " + primerNumero);
  }
  console.log("segundo let: " + segundoNumero);
}
// llamamos a las funciones
// varTest();
// letTest();

//Ejercicio 1
const brand = "Audi";
const model = "A4";
const productionYear = 2005;
let owner = "Manuel";
let isNew = true;

//Ejercicio 2
let name = "mario";
let surname = "Rossi";
let age = 20;
let isMarried = false;
let job = "developer";
let isGraduated = false;

//Ejercicio 3
// let area = 0;
// let largo = 10;
// let ancho = 4;

// area = largo * ancho;

// console.log("El area de un triangulo es: " + area);

function calcularAreaRectangulo(ancho, largo) {
  let area = 0;

  area = ancho * largo;

  return console.log("El area de un triangulo es: " + area);
}

calcularAreaRectangulo(10, 4);
calcularAreaRectangulo(7, 8);

//Ejercicio 4

var firstName = "Manuel";
var lastName = "Benitez";
var fullName = firstName + " " + lastName;

console.log(
  "Mi nombre completo es: " +
    fullName +
    "pero mi primer nombre es: " +
    firstName +
    "Y mi apellido es: " +
    lastName
);

// Ejercicio 5

var usuario = {
  nombre: "Manuel",
  registrado: true,
};

var usuarios = ["Manuel", "Sergio", "Marcos"];
var objectoUsuarios = [
  {
    nombre: "Manuel",
    registrado: true,
    password: "",
  },
  {
    nombre: "Sergio",
    registrado: false,
    password: "",
  },
  {
    nombre: "Marcos",
    registrado: false,
    password: "",
  },
];

function dondeEstaElPerro(usuario) {
  let accessoALaPagina = false;
  if (usuario.registrado === true) {
    accessoALaPagina = true;
  } else if (usuario.registrado === false) {
    usuario.registrado = false;
  }
}
