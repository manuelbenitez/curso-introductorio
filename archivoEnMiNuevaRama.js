function printName() {
  axios.get("https://mi-base-de-datos.com", {
    autorizacion: process.env.USUARIO_DB,
  });
}

() => {};
