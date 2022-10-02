import { useState } from 'react';
import './form.css';
import Input from '../../../common/input/input.common';

const Form = (props) => {
  const [name , setName] = useState('dala');
  const handler = e => {
   e.preventDefault();
    /**
     * @type {HTMLformElement}
     */
    const target = e.target;
    console.debug(target);
  }

  const onNamech = e => {

    let val = e.target.value;

    if(val.includes('.')) {

      val = val.replace('.','');

    }

    if(/find/ig.test(val)) {

      val = val.replace(/find/ig , 'fry');

    }

    if (val.length > 20) {

      alert ('charecter limit excedded') ;

      val = val.substring (0 , 20)  ;

    }
    setName(val);
  }

  return (
    <form className='add-form' onSubmit={handler}>

      <div style={{ margintop : 20 }}>
        <Input
         label="Name"
         value={name}
         onChange={onNamech}
        />
        <button className='btn' type='submit'>Creat</button>
        </div>
    </form>
  );
};

export default Form;