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
  var segundoNumero = 12;
  if (true) {
    segundoNumero = 15; // variable diferente
    let tercerNumero;
    console.log(tercerNumero);
    console.log("primer let: " + primerNumero);
    console.log("primer let: " + primerNumero);
  }
  console.log("segundo let: " + segundoNumero);
}
// llamamos a las funciones
varTest();
letTest();
