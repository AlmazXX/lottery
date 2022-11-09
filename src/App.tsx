import React, { useState } from "react";
import "./App.css";
import Lot from "./Lot/Lot";

const getRandom = (max: number, min: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const App = () => {
  const [lots, setLots] = useState<number[]>([]);

  const changeNumbers = () => {
    const numbers: number[] = [];
    while (numbers.length < 5) {
      const newNumber = getRandom(5, 36);
      if (!numbers.includes(newNumber)) {
        numbers.push(newNumber)
      }
    }
    setLots([...numbers]);
  };

  return (
    <div className="App">
      <div className="lot-wrapper">
        {lots.map((lot) => (
          <Lot value={lot} />
        ))}
      </div>
      <div className="btn-wrapper">
        <button onClick={changeNumbers}>Change Numbers!</button>
      </div>
    </div>
  );
};

export default App;
