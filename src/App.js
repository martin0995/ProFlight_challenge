import Logo from "./components/Logo";
import Left from "./components/Left";
import Right from "./components/Right";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  const handleNext = () => {
    counter === 4 ? setCounter(1) : setCounter(counter + 1);
    console.log(counter);
  };

  const handleBack = () => {
    counter === 1 ? setCounter(4) : setCounter(counter - 1);
    console.log(counter);
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
