import { useEffect, useState } from 'react';
import './page-not-found.css';
import Result from './result.component';

const NotFound = (props) => {
  const [Counter,setCounter]= useState(0);
  const[color,setColor]=useState("#fff");
  const[Name,setName]=useState("");

  useEffect(()=>{
    if(Counter===3)
    setColor('red');
    else if(Counter===5)
    setColor('blue');
    else
setColor("#"+ Math.floor(Math.random()* 16777215).toString(16));
  },[Counter,Name]
    );
 

  return (
    <div className="not-found-page">
  
      <h1 style={{color}}>404 Page Not Found :'( </h1>
      <h3>{Counter}</h3>
      <button onClick={()=>{setCounter(Counter+1)}} > +1 </button>
      <input type="text"  value={Name} onChange = { (e)=> setName(e.target.value)}/>
      <Result Counter={Counter}/>
    </div>
  );
};

export default NotFound;
