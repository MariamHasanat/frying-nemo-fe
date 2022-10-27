import './add.css';

import Form from '../../add/form/form.component';
import { useEffect, useState } from 'react';
<<<<<<< HEAD



const AddPage = (props) => {

=======

const AddPage = (props) => {
>>>>>>> 0e51ec02ae3b40fcdb14c892a3f68a9748699c44
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => {
      console.debug('use effect cleaning up, clearing timer');
      clearInterval(timer);
    };
  }, []);

  const updateTime = () => {
    console.log('updateTiem is executing');
    setTime(new Date());
  };

  return (
    <div className='add-page'>
      <span className='clock'>{time.toLocaleTimeString()}</span>
      <h1>Add a new item</h1>
      <Form onNavigate={props.onNavigate} />
    </div>
  );
};

export default AddPage;