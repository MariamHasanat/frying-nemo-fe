
import React, { useEffect, useState } from 'react';


const Result = (props) => {
  const [win, setWin] = useState(false);
  useEffect(() => {
    if (props.counter >= 10)
      setWin(true);
  }, [props.counter]);

  return (
    <div>
      {win && <span> you are the Winner</span>}
    </div>
  );
};

export default Result;
