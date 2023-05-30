import {
  imprimirFrase,
  addStudent,
  findYoungestStudent,
  imprimirString,
  findLongestSurname,
} from "./utils.js";

const estudiantes = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: "gamer" },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: "sportsman" },
  { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: "gamer" },
  { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: "photographer" },
];

function infoStudents() {
  imprimirFrase(estudiantes);

  addStudent(estudiantes);

  imprimirFrase(estudiantes);

  findYoungestStudent(estudiantes);

  imprimirString();

  findLongestSurname(estudiantes);
}

infoStudents();
