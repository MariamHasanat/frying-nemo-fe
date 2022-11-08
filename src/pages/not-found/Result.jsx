import React, { useEffect, useState } from 'react'
// import React from 'react'

const Result = (props) => {
  const[win , setWin] = useState(false);
  const[color , setColor] = useState();

  useEffect(() => {
    if(props.counter >= 10) {
      setWin(true);
    }
    setColor(color);
  }, [props.counter]);

  return (
    <div>
     {
      win && <h3>you are the winner</h3>
     }
    
   </div>
  )
}

export default Result;