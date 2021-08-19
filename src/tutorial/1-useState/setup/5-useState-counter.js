import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Regular Counter</h1>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        increase
      </button>
      <button className="btn" onClick={() => setCount(count - 1)}>
        descrease
      </button>
      <button className="btn" onClick={() => setCount(0)}>
        reset
      </button>
      <h1>More Complex Counter</h1>
      <h1>{count}</h1>
      <button
        className="btn"
        onClick={ ()=>setTimeout(()=>{

          setCount((prevState)=>{

            return prevState+1
          })


        },2000)
        }
      >
        increase later
      </button>
    </div>
  );
};

export default UseStateCounter;
