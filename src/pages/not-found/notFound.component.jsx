import React, { useEffect, useState } from 'react';
import Result from './result.component';

const NotFound = () => {
  const [counter, setCounter] = useState(0);
  const [color , setColor] = useState ('') ;
  const [win , setWin] = useState (false) ;
  useEffect (()=> {
    if (counter >= 10)
      setWin (true) ;
    setColor ("#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase())
  } , [counter])
  return (
    <div>
      <h1 style={{color}}>This page is not found</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <span>{counter}</span>
      <br />
      {win && <span> you are the Winner</span>}
      {/* <Result counter={counter} /> */}
    </div>
  );
};

export default NotFound;
