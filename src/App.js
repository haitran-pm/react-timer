import React from "react";
import useTimer from "./useTimer";
import { formatTime } from "./formatTime";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    records,
    active,
  } = useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={splitTimer}>
            Split
          </button>
        </div>
        <div className="timer__records">
          <ul>
            {records.map((record) => (
              <li key={record.toString()}>{formatTime(record)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
