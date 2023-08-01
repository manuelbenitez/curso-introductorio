import React from "react";

const Button = (onClick, label, isPrimary, disabled) => {
  const classNames = isPrimary ? "primary" : "secondary";
  return (
    <button onClick={onClick} className={classNames} disabled={disabled}>
      {label}
    </button>
  );
};

const App = () => {
  const handleClick = () => {
    console.log("llavame a la pagina Login");
  };
  
  return (
    <body>
      <Button
        onClick={handleClick}
        disabled={false}
        isPrimary={true}
        label={"LogIn"}
      />
    </body>
  );
};

export default App;
