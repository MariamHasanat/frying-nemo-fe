import './add.css';

import Form from '../../components/add/form/form.component';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../components/providers/user-provider.component';

const AddPage = () => {
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  useEffect(() => {
    //This code excuting when the component did mount 
    if (!userContext.user)
      navigate('/login', { replace: true });
    const timer = setInterval(() => {
      console.log('time running out');
      // updateTimer ;
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(timer));
  }, []);

  return (
    <div className='add'>
      <h1>Add a new item</h1>
      <span>{time.toLocaleTimeString()}</span>
      <Form />
    </div>
  );
};

export default AddPage;