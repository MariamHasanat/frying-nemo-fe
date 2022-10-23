import { useEffect, useState } from 'react';
import './not-found.css';

const NotFound = (props) => {

  const [counter, setCounter] = useState(0);
  const [win, setWinner] = useState(false);
  useEffect(() => {
    if(counter >= 10){  
      setWinner(true);
    }
   }, [counter]);


  return (
    <div className="not-found-page">
      <h1>404 Page Not Found :'( </h1>
      <div>{counter}</div>
      <button type='button' onClick={
        () => setCounter(counter + 1)
      }>+1</button>

      {
        win && <div>you are the winner :D</div>
      }

    </div>
  );
};

export default NotFound;