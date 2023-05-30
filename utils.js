export function imprimirFrase(estudiantes) {
  estudiantes.forEach((estudiante) => {
    // Imprimir el mensaje relacionado con su hobby
    console.log(estudiante.name);

    if (estudiante.hobby === "gamer") {
      console.log("Life Is a Game, Play to Win!");
    } else if (estudiante.hobby === "sportsman") {
      console.log("Never give up!");
    } else if (estudiante.hobby === "photographer") {
      console.log("A picture is worth a thousand words!");
    }
    // switch (estudiante.hobby) {
    //   case "gamer":
    //     console.log("Life Is a Game, Play to Win!");
    //     break;
    //   case "sportsman":
    //     console.log("Never give up!");
    //     break;
    //   case "photographer":
    //     console.log("A picture is worth a thousand words!");
    //     break;
    // }
  });
}

export function addStudent(estudiantes) {
  const newStudent = {
    id: 5,
    name: "Elena",
    surname: "Pappalardo",
    age: 23,
    hobby: "photographer",
  };

  estudiantes.splice(2, 0, newStudent);
}

export function findYoungestStudent(estudiantes) {
  let youngestStudent = estudiantes[0];

  estudiantes.forEach((estudiante) => {
    if (estudiante.age < youngestStudent.age) {
      youngestStudent = estudiante;
    }
  });

  // for (let i = 1; i < estudiantes.length; i++) {
  //   if (estudiantes[i].age < youngestStudent.age) {
  //     youngestStudent = estudiantes[i];
  //   }
  // }

  console.log("El más joven es", youngestStudent.name);
}

export function imprimirString() {
  let palabra = "palabra";
  for (let i = 0; i < palabra.length; i++) {
    console.log(palabra[i]);
  }
}
export function findLongestSurname(estudiantes) {
  let longestSurname = "";

  estudiantes.forEach((estudiante) => {
    if (estudiante.surname.length > longestSurname.length) {
      longestSurname = estudiante.surname;
    }
  });
  // for (let i = 1; i < estudiantes.length; i++) {
  //   if (estudiantes[i].surname.length > longestSurname.length) {
  //     longestSurname = estudiantes[i].surname;
  //   }
  // }
  console.log("El apellido más largo es", longestSurname);
}
