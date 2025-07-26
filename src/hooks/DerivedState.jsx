import React, { useState } from 'react'

const DerivedState = () => {
    const [users, setUsers] = useState(
        [
            { name: "Alice", age: 25 },
            { name: "Bob", age: 35 },
            { name: "Charle", age: 45 },
            { name: "John", age: 50 },
            
        ]
    );
  return (
    <div>
          <h2>Userlist</h2>
          {
              users.map((curEle, index) => (
                  <ul key={index}>
                      <li>{curEle.name} - {curEle.age} years old</li> 
                  </ul>
              ))
          }
    </div>
  )
}

export default DerivedState
