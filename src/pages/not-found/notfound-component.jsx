import './not-found.css';
// import Form from '../../components/add/form/form.component';
// import Result from './result';
import { useEffect, useState } from 'react';


// useEffect used for state and props
const NotFoundPage = (props) => {

  const [counter, setCounter] = useState(1);

  return (
    <div>
      <h1>Not Found Page</h1>

      {/* <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <Result counter={counter} /> */}
    </div>
  );
};

export default NotFoundPage;