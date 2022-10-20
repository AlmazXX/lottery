import React, { useState } from "react";
import "./App.css";
import Lot from "./Lot/Lot";

const getRandom = (max: number, min: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const App: React.FC = () => {
  const [lots, setLots] = useState([
    { children: 1 },
    { children: 2 },
    { children: 3 },
    { children: 4 },
    { children: 5 },
  ]);
  const changeNumbers = () => {
    setLots(() => {
      const result = [];
      for (let i = 0; i < 5; ++i) {
        result[i] = { children: getRandom(5, 36) };
      }
      return result;
    });
  };

  return (
    <div className="App">
      <div className="lot-wrapper">
        <Lot>{lots[0].children}</Lot>
        <Lot>{lots[1].children}</Lot>
        <Lot>{lots[2].children}</Lot>
        <Lot>{lots[3].children}</Lot>
        <Lot>{lots[4].children}</Lot>
      </div>
      <div className="btn-wrapper">
        <button onClick={changeNumbers}>Change Numbers!</button>
      </div>
    </div>
  );
};

export default App;
