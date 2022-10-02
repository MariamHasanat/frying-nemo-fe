import { useState } from 'react';
import Input from '../../common/input/input.component';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState('');

  /**
   * Form Submit Handler 
   * @param e{React.ChangeEvent<HTMLInputElement>} event
   */
  const submitHandler = (e) => {
    e.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    console.log(name)
  };

  const inputChangeHandler = (e) => {
    /*
              let value = e.target.value;
              if(value.includes('find')){
                // alert('we are not finding nemo... we are frying nemo!')
                value = value.replace('find', 'fry')
              }
              setName(value);
              */

    let value = e.target.value;
    if (value.length >= 20) {
      alert('character limit exceeded');
      value = value.substring(0, 20);
    }
    setName(value);
  };
  return (
    <form onSubmit={submitHandler} className="styled-form">
      <Input
        label="sajeda"
        onChange={inputChangeHandler}
        value={name}
      />

      <div>
        <button type='submit'>Create</button>
      </div>
    </form>
  );
};

export default Form;