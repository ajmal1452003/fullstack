import React from "react";
import { useState } from "react";
const Gallery = () => {
  var [ counters, setCount ] = useState(0);
  function increment() {
    setCount(counters + 1);
  }
  function decrement() {
    setCount(counters - 1);
  }
  function reset() {
    setCount(counters =0);
  }

  return (
    <section>
      <h1>this is Gallery page</h1>
      <h1 style={{ textAlign: "center" }}>This is Gallery Page</h1>
      <h2>The State of my variable is {counters}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </section>
  );
};
export default Gallery;
