import { useEffect, useState } from 'react';
import Form from '../../components/add/form/form.component';
import './add.css';

const AddPage = (props) => {


  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.debug('use Effect executing > starting timer');
    const timer = setInterval(updatTimer, 1000);
    return () => {

      console.debug("use Effect cleaning up > clear the timer");
      clearInterval(timer);
    };


  }, []);

  const updatTimer = () => {
    console.log("update timer is Executnig");
    setTime(new Date());
  };
  return (
    <div className='wrapper'>
<span>{time.toLocaleTimeString()}</span>
      <h1>Add a new item</h1>
      {/* <Form onNavigate={props.onNavigate} /> */}

      <Form onNavigate={props.onNavigate} />

    </div>
  );
};

export default AddPage;