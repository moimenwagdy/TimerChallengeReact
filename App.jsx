import { useState } from "react";
import Player from "./components/Player.jsx";
import TimerChallenge from "./components/timerChallenges.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy " targetTime={5} />
        <TimerChallenge title="Getti" targetTime={10} />
        <TimerChallenge title="Pros" targetTime={15} />
      </div>
    </>
  );
}

export default App;
