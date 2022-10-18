import React, { useState } from 'react'
import Result from './Result';
import './not_found.css'
import { useEffect } from 'react';

const Notfound = () => {
  const [counter , setCounter] = useState(0);
  const[color , setColor] = useState("black");
  const[name , setName] = useState('');
  
  useEffect(()=> {
     alert(`WELCOME TO THE GAME COUNTER`)
     return() => {
      alert("good bye!");
     };
  }, [])

  useEffect (() => {
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  }, [counter , name]);

  return (
    <div className="Not-found">
      <h1 style={{color}}>404 This page not found</h1>

      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter+1)} className="nemo-button">+</button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}  className="input-style"/>
      <Result counter={counter}/>
    </div>
  )
}

export default Notfound