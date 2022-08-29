import { useEffect, useRef, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const h1Ref = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const timerRef = useRef(null);

  const startButtonHandler = () => {
    const minutes = +minuteRef.current.value;
    const totalSeconds = +secondRef.current.value + minutes * 60;
    setSeconds(totalSeconds);
  };

  const pauseResumeButtonHandler = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    } else {
      decrementTimer();
    }
  };

  const StopButtonHandler = () => {
    clearTimeout(timerRef.current);
    timerRef.current = null;
    minuteRef.current.value = 0;
    secondRef.current.value = 0;
    setSeconds(0);
  };

  const decrementTimer = () => {
    timerRef.current = setTimeout(() => {
      setSeconds((sec) => sec - 1);
    }, 1000);
  };

  const getFormattedTimer = () => {
    let minutes = parseInt(seconds / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const sec = `0${seconds % 60}`.slice(-2);
    return `${minutes}:${sec}`;
  };

  useEffect(() => {
    if (seconds) {
      decrementTimer();
    }
    h1Ref.current.innerText = getFormattedTimer();
  }, [seconds]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <label>
          <input type="number" ref={minuteRef} /> Minutes
        </label>
        <label>
          <input type="number" ref={secondRef} /> Seconds
        </label>
        <button onClick={startButtonHandler}>Start Timer</button>
        <button onClick={pauseResumeButtonHandler}>Pause/Resume Timer</button>
        <button onClick={StopButtonHandler}>Stop Timer</button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <h1 ref={h1Ref}>0</h1>
        <h1>{getFormattedTimer()}</h1>
      </div>
    </div>
  );
}

export default Timer;
