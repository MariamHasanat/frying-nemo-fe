import { useState } from 'react';
import Input from '../../common/input/input.component';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState('Raghad');
  /*
   * calls JSDoc
   * @param {React.ChangeEvent<HTMLInputElement>} e   //Event object
   */
  const handle = e => {
    e.preventDefault();
    console.debug(name);
    console.log('Form Submitted');
  };
  /**
   * 
   * @param {(React.ChangeEvent<HTMLInputElement>} e 
   */
  const nameChange = e => {
    let val = e.target.value;
    if (/find/ig.test(val)) {
      alert('find not aloowed to be includded in the input !');
      val = val.replace(/find/ig, 'fry');
      console.log(val);
    }
    if (val.length > 20) {

      alert('charecter limit excedded');
      val = val.substring(0, 20);
    }
    console.log(val.length);
    setName(val);
  };

  return (
    <form className='addForm' onSubmit={handle}>
      <Input
        label="Name"
        value={name}
        required
        onChange={nameChange}
      />
      <div className='addFormButtons'>
        <button
          type='submit'
          className='formComp'
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default Form;