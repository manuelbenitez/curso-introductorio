const arrayDePeliculas: IPelicula[] = [
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
  {
    title: "",
    director: "",
    year: 0,
    genre: "",
  },
];

interface IPelicula {
  title: string;
  director: string;
  year: number;
  genre: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}
