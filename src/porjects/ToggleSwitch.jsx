import React, { useState } from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }
  return (
    <>
          <div className='toggle-switch' onClick={handleToggleSwitch} style={{background: isOn ? "green" : "red"}}>
              <div className={`switch ${isOn ? "on" : "off"}`}>
                  <span className='switch-state'>{isOn ? "ON" : "OFF" }</span>
              </div>
     </div>

          
    </>
  )
}

export default ToggleSwitch
