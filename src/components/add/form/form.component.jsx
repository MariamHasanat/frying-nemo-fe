import { useState } from 'react';
import './form.css';
import Input from '../../../common/input/input.component';

const Form = (props) => {
  const [name, setName] = useState('Nadeen');
  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e 
   */
  const SubmitHandel = e => {
    e.preventDefult();
    /**
     * @type {HtmlFormElement}
     */
    const target = e.target;

  };
  const onNameChange = e =>  {
    let value = e.target.value;

    if (value.includes('find')) {
      value=value.replace(/find/ig, 'fry');
    }
    setName(value);
  
  };
  return (
    <form className='add-form' onSubmit={SubmitHandel}>
    <div style={{marginTop:20}}>
       <Input
        lable="Name"
        placeholder='name'
        value={name}
        onChange={onNameChange}
       />
      </div>
      <div>
        <button type='submit'>Create</button>
      </div>
    </form>
  );
};

export default Form;