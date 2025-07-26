import React, { useState } from 'react'

const State = () => {
  const [count, setCount] =  useState(0);
  const addValue = () =>{
    setCount(count + 1);
  }
 
  return (
    <>
      <h2>State works in depth</h2>
      <h1>{count}</h1>
      <button onClick={addValue}>Add Count</button>
      <Childcomponent count={count} />
    </>
  )
}

export default State;

  export const Childcomponent = ({count}) =>{
    console.log("Child Component Render")
      return(
        <>
          <div>Child Component - { count}</div>
        </>
      )
  }