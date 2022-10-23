import { useEffect, useState } from 'react';
import './timer.css';

const Timer = () => {
  const hours = new Date().getHours().toString();
  const minutes = new Date().getMinutes().toString();
  const seconds = new Date().getSeconds().toString();

  const getLengthPadding = (value) => {
    if (value.length == 1) {
      return `0${value}`;
    }
    return value;
  };
  
  const getCurrentTime = () => `${getLengthPadding(hours)}:${getLengthPadding(minutes)}:${getLengthPadding(seconds)}`;
  const [time, setTime] = useState(getCurrentTime());
  useEffect(() => {
    setTimeout(() => {
      setTime(getCurrentTime());
    }, 1000);
  });
  return (
    <div className='timer'>
      {time}
    </div>
  );
};

export default Timer;