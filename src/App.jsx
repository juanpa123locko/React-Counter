import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
let counter = 0;
function Counter(props) {
  const [counter, setCounter] = useState(0);
  return (<>
    <h1 style={counter <= -1 ? { color: "red" } : counter >= 1 ? { color: "green" } : { color: "gray" }}>Counter: {counter}</h1>
    <button onClick={() => {
      setCounter(counter + 1);
    }}>
      sumar
    </button>
    <button onClick={() => {
      setCounter(0);
    }}>
      reset
    </button>

    <button onClick={() => {
      setCounter(counter - 1);
    }}>
      restar
    </button >
  </>
  );
}



function App() {
  return <>
    {/* <Texto /> */}
    <Counter />
  </>;
}

export default App;
