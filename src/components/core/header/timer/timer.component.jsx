import { useEffect, useState } from 'react';
import './timer.css'

const Timer = () => {
  const getCurrentTime = () => `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  const [time, setTime] = useState(getCurrentTime())
  useEffect(() => {
    setTimeout(() => {
      setTime(getCurrentTime())
    }, 1000);
  });
  return (
    <div className='timer'>
    {time}
  </div>
  )
}

export default Timer;