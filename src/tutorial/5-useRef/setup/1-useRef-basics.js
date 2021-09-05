import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const inputRef = useRef(0);
  const divRef = useRef(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current);
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div ref={divRef}>
          <input type="text" ref={inputRef} />
          <button type="button">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
