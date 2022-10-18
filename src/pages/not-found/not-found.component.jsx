import './not-found.css';
import image from './images/404.png';
import { useEffect, useState } from 'react';

const NotFoundPage = (props) => {
  const [counter, setCounter] = useState(0)
  const [started, setStarted] = useState(false)
  const [win, setWin] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (started) setCounter((counter) => counter + 1)
    }, 1000);
  })

  useEffect(() => {
    if (!(counter%60)) setWin(true)
  }, [counter])

  const toggleStarted = () => {
    setStarted(!started);
  }

  const convertSecondsToTime = (seconds) => {
    let hours = parseInt(seconds/3600);
    let minutes = parseInt((seconds%3600)/60);
    seconds = parseInt((seconds%3600)%60);
    return `${hours != 0? `${hours} hours ` : ``} ${minutes != 0? `${minutes} minutes ` : ``} ${seconds != 0? `${seconds} seconds ` : ``}`
  }

  return (
    <div className='not-found-page'>
      <img src={image} alt="" />
      <p>Counter: {convertSecondsToTime(counter)}</p>
      {win && <p>YOU WON!!</p>}
      <button onClick={() => {
        toggleStarted();
      }}>{started? `Stop Counter` : `Start Counter`}</button>
    </div>
  );
};

export default NotFoundPage;