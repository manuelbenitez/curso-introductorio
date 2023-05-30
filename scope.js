let something = 5;
console.log(this.something);

let objectSomething = {
  num: 5,
  imprimir: function (){
    console.log(this.num, 'imprimir')
  },

  imprimirArrow: () => {
    console.log(this.num, 'Arrow')
  }
}

if (true) {
  let something = 10;
  console.log(something);
}

function func() {
  console.log(something);
}

func();

objectSomething.imprimir()
objectSomething.imprimirArrow()