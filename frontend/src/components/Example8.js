import { useState } from "react";
function Car() {
  const [car, setCar] = useState({
    brand: "Bugatti",
    model: "Veyron",
    year: "2005",
    color: "black",
  });

  const updateColor = (a) => {
    setCar((previousState) => {
      return { ...previousState, color: a };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={() => updateColor("Grey")}>
        Grey
      </button>
      <button type="button" onClick={() => updateColor("Biege")}>
        Biege
      </button>
      <button type="button" onClick={() => updateColor("Green")}>
        Green
      </button>
      <button type="button" onClick={() => updateColor("Black")}>
        Black
      </button>
      <button type="button" onClick={() => updateColor("Crimson")}>
        Crimson
      </button>
    </>
  );
}

export default Car;
