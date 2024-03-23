import { useState } from "react";

export default function App() {
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleSquareClick(boxNum) {
    const clickedSquare = square.slice();
    clickedSquare[boxNum] = "X";
    setSquare(clickedSquare);
  }
  return (
    <div className="App">
      <div className="board_row">
        <Square value={square[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={square[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>
      <div className="board_row">
        <Square value={square[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>
      <div className="board_row">
        <Square value={square[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
    </div>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <div>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </div>
  );
}
