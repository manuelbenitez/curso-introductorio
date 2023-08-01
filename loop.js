const autos = [
  {
    nombre: "Mazda",
    color: "Rojo",
    year: "2009",
    cantidadDePuertas: 4,
  },
  {
    nombre: "Audi",
    color: "Gris",
  },
];

for (let i = 0; i < autos.length; i++) {
  console.log(i);
  console.log(autos[i].nombre);

  for (const key in autos[i]) {
    console.log(key);
  }
}
