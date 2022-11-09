import './add.css';
import { useEffect, useState } from 'react';

import Form from '../../../components/add/form/form.component';

const AddPage = (props) => {
  const [time, setTime] = useState(new Date())

  const updateTime = () =>{
    setTime(new Date())
  }
  useEffect (() =>{
    const timer = setInterval(updateTime, 1000)
    return () =>{
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="add-page">
      <span className='clock'>&#128337;{time.toLocaleTimeString()}</span>
      <h1>Add Menu Item</h1>
      <Form onNavigate={props.onNavigate} />
    </div>
  );
};

export default AddPage;
