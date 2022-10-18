import { useEffect, useState } from 'react';


const Result = (props) => {
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (props.counter >= 10) {
      setWin(true);
    }
  }, [props.counter]);

  return (
    <div>
      {
        win && <h3>You are the Winner</h3>
      }
    </div>
  );
};

export default Result;