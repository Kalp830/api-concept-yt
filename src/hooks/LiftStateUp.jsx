import React, { useState } from 'react'

const LiftStateUp = () => {
    const [inputvalue, setInputValue] = useState("");
  return (
    <div>
          <InputComponent inputvalue={inputvalue} setInputValue={ setInputValue} />
          <DisplayComponent inputvalue={ inputvalue} />
    </div>
  )
}

export default LiftStateUp

const InputComponent = ({inputvalue, setInputValue}) => {
    return (
        <>
            <input
            type="text"
            placeholder='enter your name'
            value={inputvalue} 
            onChange={(event) => setInputValue(event.target.value) }    
            />
        </>
    )
}

const DisplayComponent = ({inputvalue}) => {
    return (
        <>
            <h1>The Current input value is: {inputvalue}</h1>
        </>
    )
}