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
    <div className="mydiv1" >
      <span className='clock'>&#9200;{time.toLocaleTimeString()}</span>
      <Form onNavigate={props.onNavigate} user={props.user} />
    </div>
  );
};

export default AddPage;