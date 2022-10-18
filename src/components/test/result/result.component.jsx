import { useState, useEffect } from "react";

/**
 * 
 * @param {{
 * counter:int
 * }} props 
 * @returns 
 */
const Result = (props) => {
  const [win, setWin] = useState(false);


  useEffect(() => {
    if (props.counter % 10 === 0) {
      setWin(true);
    } else {
      setWin(false);
    }
    // dependency array ONLY contains states
  }, [props.counter]);
  return (
    <div>
      {win && <h3>Done !!</h3>}
    </div>
  );
};

export default Result;