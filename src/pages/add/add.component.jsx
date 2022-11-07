import './add.css';
import { useState , useEffect} from 'react';
import Form from '../../components/add/form/form.component';

const AddPage = (props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.debug('Use effect executing. Starting timer.');
    // On Component mount=> Start the interval
    const timer = setInterval(updateTime, 1000);

    return () => {
      console.debug('Use effect cleaning up. Clearing timer.');
      // Code to stop interval timer, on component unmount => Stop the interval
      clearInterval(timer);
    };
  }, []);

  const updateTime = () => {
    console.log("updateTime is executing");
    setTime(new Date());
  };
  return (
    <div className='add-page'>
      <span className="clock">&#128337;{time.toLocaleTimeString()}</span>
      <h1>Add a new item</h1>
      <Form onNavigate={props.onNavigate } user={props.user}/>
    </div>
  );
};

export default AddPage;