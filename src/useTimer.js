import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const [records, setRecords] = useState([]);

  const isStart = useRef(false);
  const active = useRef(); // Refer to a button
  const refInterval = useRef(0);

  const startTimer = () => {
    // "Your code here";
    active.current.disabled = true;
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    // "Your code here";
    isStart.current = false;
    active.current.disabled = false;
    clearInterval(refInterval.current);
  };
  const resetTimer = () => {
    // "Your code here";
    setTime(0);
    setRecords([]);
    active.current.disabled = false;
    isStart.current = false;
    clearInterval(refInterval.current);
  };
  const splitTimer = () => {
    if (isStart.current) {
      setRecords([...records, time]);
    }
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    records,
    active,
  };
};
export default useTimer;
