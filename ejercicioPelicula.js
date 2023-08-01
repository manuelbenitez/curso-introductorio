const peliculas = [
  {
    title: "Harry Potter 3",
    director: "Alfonso Cuarón",
    year: 2004,
    genre: "Fantasy",
  },
  {
    title: "Toy Story",
    director: "John Lasseter",
    year: 1995,
    genre: "Fantasy",
  },
  {
    title: "Love, Rosie",
    director: "Christian Ditter",
    year: 2014,
    genre: "Romance",
  },
  {
    title: "Insidious",
    director: "James Wan",
    year: 2014,
    genre: "Horror",
  },
  {
    title: "Love, Rosie",
    director: "Christian Ditter",
    year: 2014,
    genre: "Romance",
  },
];

function refactorizacionDePeliculas(peliculas) {
  var numYears = 1; // 3
  var arrayDeGeneros = []; // Fantasy, Romance, Horror
  var arrayDeYears = []; // 2004, 1995, 2014

  peliculas.forEach((pelicula) => {
    if (arrayDeGeneros.length === 0) {
      arrayDeGeneros.push(pelicula.genre);
    }
    if (arrayDeYears.length === 0) {
      arrayDeYears.push(pelicula.year);
    }

    const generoRepetido = arrayDeGeneros.includes(pelicula.genre);
    if (!generoRepetido) {
      arrayDeGeneros.push(pelicula.genre);
    }
    const yearRepetido = arrayDeYears.includes(pelicula.year);
    if (!yearRepetido) {
      numYears++;
      arrayDeYears.push(pelicula.year);
    }
  });

  return {
    numYears: numYears,
    genreCounts: arrayDeGeneros,
    numMovies: peliculas.length,
  };
}

console.log(`Años no repetidos de las peliculas: ${objetoRetornado.numYears}`);
console.log(
  `Generos no repetidos de las peliculas: ${objetoRetornado.genreCounts}`
);
console.log(`Cantidad de peliculas: ${objetoRetornado.numMovies}`);
