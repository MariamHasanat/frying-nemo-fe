import React, { useState } from 'react'
import Result from './Result';
import './not_found.css'

const Notfound = () => {
  const [counter , setCounter] = useState(0);
  
  

  return (
    <div className="Not-found">
      <h1>404 This page not found</h1>

      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter+1)} className="nemo-button">+</button>
      <Result counter={counter} />
    </div>
  )
}

export default Notfound