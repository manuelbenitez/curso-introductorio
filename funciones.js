var isLoading = false;

function setIsLoading(payload) {
  isLoading = payload;
}

function printName(name, setIsLoading) {
  setIsLoading(true);
  console.log(isLoading);

  setTimeout(() => {
    console.log(name);

    setIsLoading(false);
    console.log(isLoading);
  }, 2000);
}

printName("Wilmer", setIsLoading);
