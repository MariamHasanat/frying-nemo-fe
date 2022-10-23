
import {useEffect, useState} from 'react';


const Result= (props)=>{
 
  const [win, setWin] = useState(false);

  useEffect(() =>{
    if(props.counter >= 10){
    setWin(true);
    }
      },[props.counter])

  return (
    <div>
      <div>
        
        {
          win&&<h3>you are win</h3>
        }
      </div>
    </div>
  )
} 

export default Result;