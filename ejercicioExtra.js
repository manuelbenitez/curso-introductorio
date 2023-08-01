const listaDeEstudiantes = [
  {
    nombre: "Manuel",
    apellido: "Benitez",
    edad: 29,
  },
  {
    nombre: "Daniel",
    apellido: "Gutierrez",
    edad: 30,
  },
  {
    nombre: "Maria",
    apellido: "Illanes",
    edad: 27,
  },
  {
    nombre: "Marco",
    apellido: "Adornato",
    edad: 26,
  },
];

const nombreDuplicado = () => {
  var esDuplicado = false;

  for (
    let posicionInicial = 0;
    posicionInicial < listaDeEstudiantes.length;
    posicionInicial++
  ) {
    const nombreAComparar = listaDeEstudiantes[posicionInicial].nombre;

    for (
      let posicionSiguiente = posicionInicial + 1;
      posicionSiguiente < listaDeEstudiantes.length;
      posicionSiguiente++
    ) {
      esDuplicado =
        listaDeEstudiantes[posicionSiguiente].nombre === nombreAComparar;
      if (esDuplicado) return esDuplicado;
    }
  }

  return esDuplicado;
};
const resultado = nombreDuplicado();

const porOrdenDeEdad = listaDeEstudiantes.sort((a, b) => {
  if (a.edad < b.edad) {
    return -1;
  } else {
    return 1;
  }
});

console.log(porOrdenDeEdad);

const textoAImprimir = resultado
  ? "Hay nombres duplicados en el registro de estudiantes"
  : "No hay nombres duplicados en el registro de estudiantes";

console.log(textoAImprimir);
