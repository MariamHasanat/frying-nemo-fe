import { useEffect, useState } from 'react';
import './add.css';

import Form from '../../components/add/form/form.component';

const AddPage = (props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.debug('Use effect executing. Starting timer.');
    const timer = setInterval(updateTime, 1000);

    return () => {
      console.debug('Use effect cleaning up. Clearing timer.');
      clearInterval(timer);
    };
  }, []);

  const updateTime = () => {
    console.log("updateTime is executing");
    setTime(new Date());
  };

  return (
    <div className="add-page">
      <span className="clock">&#128337;{time.toLocaleTimeString()}</span>
      <h1>Add Menu Item</h1>
      <Form onNavigate={props.onNavigate} />
    </div>
  );
};

export default AddPage;
