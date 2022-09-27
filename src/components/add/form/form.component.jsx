import { useState } from 'react';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState('');

  /**
   * Form Submit Handler 
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */

  
  
  return (
    <form onSubmit={() => console.log('submited')}>
      <input
        type="text"
        name="Name"
        placeholder='Name'
        value={''}
        onChange={e => console.log(e.target.value)}
      />
      <div>
        <button type='submit'>Create</button>
      </div>
    </form>
  );
};

export default Form;