import { useRef, useState } from "react";

export default function Player({ sendName }) {
  let [name, setName] = useState("unKnown entity");
  
  let newName = useRef();
  function clickHandler() {
    setName(newName.current.value);
    newName.current.value = "";
    sendName(name);
  }
  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input type="text" ref={newName} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
