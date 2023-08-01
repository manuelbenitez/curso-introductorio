const carsArray = [
  {
    brand: "Audi",
    model: "A4",
    year: 2005,
  },
  {
    brand: "Mazda",
    model: "X-R",
    year: 2004,
  },
  {
    brand: "Mercedez Benz",
    model: "Compressor",
    year: 2000,
  },
];

function refactorCarsObject(cars) {
  let formattedArray = [];

  cars.forEach((car) => {
    formattedArray.push(`${car.brand} ${car.model}`);
  });

  // for (let i = 0; i < cars.length; i++) {
  //   let carString = cars[i].brand + " " + cars[i].model;
  //   if (cars[i].year >= 2000) {
  //     formattedArray.push(carString);
  //   }
  // }

  return formattedArray;
}
