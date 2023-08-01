function sayHelloName(printName) {
  console.log("Hello");

  setTimeout(() => {
    printName("Sara");
  }, 4000);
}

function printName(nombre) {
  console.log(nombre);
}

sayHelloName(printName);
