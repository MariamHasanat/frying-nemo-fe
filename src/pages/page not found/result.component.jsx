import { useState } from "react";
import { useEffect } from "react";


const Result =(props)=>{
  const[Win,setWin]=useState(false);

  useEffect(()=> {
    if(props.Counter >=10)
    setWin(true);
  },[props.Counter]);


return(
  <div>
  {
    Win && <h2>you reached 10 or more</h2>
  }
  </div>
)}
export default Result;