import './add.css';
import Form from '../../add/form/form.component';
import { useEffect, useState } from 'react';



const AddPage = (props) => {

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
      <Form onNavigate={props.onNavigate}/>
    </div>
  );
};

export default AddPage;