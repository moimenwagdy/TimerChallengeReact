import { useRef, useState } from "react";
import Result from "./resultModal.jsx";

const TimerChallenge = ({ title, targetTime }) => {
  let [timerCount, setTimerCount] = useState(targetTime * 1000);

  let timer = useRef();
  let dialogRef = useRef();

  let timerIsActive = timerCount > 0 && timerCount < targetTime * 1000;

  if (timerCount <= 0) {
    clearInterval(timer.current);

    dialogRef.current.showModal();
  }
  function startHandler() {
    timer.current = setInterval(() => {
      setTimerCount((prv) => prv - 100);
    }, 100);
  }
  function resetTimer() {
    setTimerCount(targetTime * 1000);
  }

  function stopHadler() {
    clearInterval(timer.current);
    dialogRef.current.showModal();
  }

  return (
    <>
      <Result
        targetTime={targetTime}
        ref={dialogRef}
        result={timerCount}
        reset={resetTimer}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{timerIsActive > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? stopHadler : startHandler}>
            {timerIsActive ? " stop challenge" : "start challenge"}
          </button>
        </p>
        <p className="active">
          {timerIsActive ? "time is running" : "timer inActive"}{" "}
        </p>
      </section>
    </>
  );
};
export default TimerChallenge;
