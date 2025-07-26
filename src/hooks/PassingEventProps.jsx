import React from 'react'

const PassingEventProps = () => {
    const handleWelcomeUser = (user) => {
        alert(`Hi ${user} how are you?`)
    }
    const handleHover = () => {
        alert("Hey hover on me"); 
    }
  return (
    <>
     <WelcomeUser onClickWelcomeUser={()=> handleWelcomeUser("Kalpesh")} onMouseEnterHover={handleHover} /> 
    </>
  )
}

export default PassingEventProps;

export const WelcomeUser = (props) => {
    const {onClickWelcomeUser, onMouseEnterHover} = props
    return (
        <>
            <button onClick={props.onClickWelcomeUser}>Click</button>
            <button onMouseEnter={props.onMouseEnterHover}>Click</button>
        </>
    )
}
