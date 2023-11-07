import { forwardRef } from "react";

let Result = forwardRef(({ targetTime, result, reset }, ref) => {
  let lost = result <= 0;
  let score = Math.round((1 - result / (targetTime * 1000)) * 100);
  return (
    <dialog className="result-modal" ref={ref} onClose={reset}>
      {lost && <h2>You Lost</h2>}
      {!lost && <h2>yorr score {score}%</h2>}
      <p>
        The target time was{" "}
        <strong>
          {targetTime} {targetTime === 1 ? "second" : "seconds"}
        </strong>
      </p>
      <p>
        You stopped the timer with <strong>{result / 1000}</strong>
      </p>
      <form method="dialog">
        <button onClick={reset}>Close</button>
      </form>
    </dialog>
  );
});

export default Result;
