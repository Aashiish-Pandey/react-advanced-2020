import React, { useState, useEffect } from "react";
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    console.log("use effect");
    document.title = `ashish ${count}`
  });
  console.log("render component");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>
      );
    </div>
  );
};

export default UseEffectBasics;
