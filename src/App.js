/*
También se podría haber usado el método .map() sobre un arreglo de 4 logos para renderizar el mismo "common" (card) con cada logo.

Por simplicidad, al ser solo 4 logos decidí no aplicar el .map(). En caso de escalar el código a muchos más logos, el método .map() sería mas eficiente.
*/

import Logo from "./components/Logo";
import Left from "./components/Left";
import Right from "./components/Right";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  const handleNext = () => {
    counter === 4 ? setCounter(1) : setCounter(counter + 1);
  };

  const handleBack = () => {
    counter === 1 ? setCounter(4) : setCounter(counter - 1);
  };

  return (
    <div className="App">
      <div className="flex flex-row justify-between items-center w-3/5 mt-5 mx-auto">
        <button onClick={handleBack}>
          <Left />
        </button>
        <div className={counter === 1 ? "" : "opacity-25"}>
          <Logo />
        </div>
        <div className={counter === 2 ? "" : "opacity-25"}>
          <Logo />
        </div>
        <div className={counter === 3 ? "" : "opacity-25"}>
          <Logo />
        </div>
        <div className={counter === 4 ? "" : "opacity-25"}>
          <Logo />
        </div>
        <button onClick={handleNext}>
          <Right />
        </button>
      </div>
    </div>
  );
}

export default App;
