import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <div className="board_row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board_row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board_row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
  return (
    <div>
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    </div>
  );
}
