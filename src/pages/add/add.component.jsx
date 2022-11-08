import { useState } from "react";
import { useEffect } from "react";
import { Form } from "react-router-dom";
import './add.css'


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
      <Form onNavigate={props.onNavigate} user={props.user} />
    </div>
  );
};

export default AddPage;
