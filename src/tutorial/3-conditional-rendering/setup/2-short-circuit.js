import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello00000 world";
  const secondValue = text && "hello world";

  return <>
  <h1>{firstValue}</h1>
  {text && <h1>hello world</h1>}</>;
};

export default ShortCircuit;
