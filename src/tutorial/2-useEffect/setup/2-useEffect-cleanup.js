import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const[size,setSize] = useState(window.innerWidth)
  
  const checkSize = ()=>{

    setSize(window.innerWidth)
  }
  // window.addEventListener('resize',checkSize)
  console.log(size)
  useEffect(()=>{
    console.log("Hello world")

    window.addEventListener('resize',checkSize)

    return (
      ()=>{
        console.log("clean up")
        window.removeEventListener('resize',checkSize)
      }

    )
  })
  return (

    <div>
      <h1>size</h1>
      <h4>{size}px</h4>
    </div>
  )
};

export default UseEffectCleanup;
