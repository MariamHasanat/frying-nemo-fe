import "./add.css"
import { useEffect } from 'react';
import { useState } from 'react';
import Form from '../../components/add/form/form.component';
const AddPage = (props) => {
  const [time, Settime] = useState(new Date())

 
  useEffect(() => {

  const timer=setInterval(Updatetime , 1000)

return ()=>(
  clearInterval(timer)
)
  }, [])

  const Updatetime = () => {{
    console.log("time change")
 Settime(new Date())

  
   } };

  return (
    <div>
      <span className='clock'>{time.toLocaleTimeString()}</span>
      <Form onNavigate={props.onNavigate} />
    </div>
  );
};

export default AddPage;