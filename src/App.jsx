import React, { useState } from "react";
import "./styles.css";

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}

function Board() {
  //here we have lifted state by moving state from Square from Board
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = (i) => {
    //here we created a copy of array with slice method
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  };
  return (
    <div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
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
