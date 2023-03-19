import React, { useState } from "react";
import "./styles.css";

function Square() {
  const [value, setValue] = useState("null");
  const handleClick = () => {
    // console.log("clicked")
    setValue("X");
  };
  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}

function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Board />
    </div>
  );
}

export default App;
