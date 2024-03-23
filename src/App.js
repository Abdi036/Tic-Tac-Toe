import { useState } from "react";

const winnerOutcomes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 8],
];

function calcWinner(square) {
  for (let i = 0; i < winnerOutcomes.length; i++) {
    const [x, y, z] = winnerOutcomes[i];
    if (square[x] && square[x] === square[y] && square[x] === square[z]) {
      return square[x];
    }
  }
  return null;
}

export default function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleNewGame() {
    if (isPlaying && square.every((el) => el === null)) return;
    setSquare(Array(9).fill(null));
    setIsPlaying((isPlaying) => !isPlaying);
  }

  const winner = calcWinner(square);
  let status;
  if (winner) {
    status = "The winner is player:" + winner;
  } else {
    status = `Next move for:${isXNext ? "X" : "O"}`;
  }

  return (
    <div className="App">
      <div className="status">{isPlaying && status}</div>
      <Board
        square={square}
        setSquare={setSquare}
        setIsXNext={setIsXNext}
        isXNext={isXNext}
        isPlaying={isPlaying}
      />
      <Button handleNewGame={handleNewGame} isPlaying={isPlaying} />
    </div>
  );
}
function Button({ handleNewGame, isPlaying }) {
  return (
    <div className="btn_container">
      <button onClick={handleNewGame}>{isPlaying ? "NewGame" : "Play"}</button>
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
function Board({ square, setSquare, setIsXNext, isXNext, isPlaying }) {
  function handleSquareClick(boxNum) {
    if (!isPlaying) return;
    const clickedSquare = square.slice();
    if (square[boxNum] || calcWinner(square)) {
      return;
    }

    clickedSquare[boxNum] = "X";
    if (isXNext) {
      clickedSquare[boxNum] = "X";
    } else {
      clickedSquare[boxNum] = "O";
    }
    setSquare(clickedSquare);
    setIsXNext(!isXNext);
  }

  return (
    <>
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
    </>
  );
}
