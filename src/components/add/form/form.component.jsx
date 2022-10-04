import { useState } from 'react';
import './form.css';
import Input from '../../../common/input/input.common';
import Textarea from '../../../common/textarea/textarea.component';
import Select from '../../../common/Select/Select';

const Form = (props) => {
  const [name , setName] = useState('dala');

  /**
   * Handles on change events on the name field.
   * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
   */
  const handler = e => {
   e.preventDefault();
    /**
     * @type {HTMLformElement}
     */
    const target = e.target;
    console.debug(target);
  }

  const onNamechange = e => {

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
         onChange={onNamechange}
         required
        />
       
        <Textarea
        label="Describtion"
        />
        <Select label="Category">
          <option>Fish</option>
          <option>Drinks</option>
          <option>Hookah</option>
          <option>salad</option>
          <option>Sandwiches</option>
          <option>Main Dish</option>
          <option>Appetizers</option>
          <option>Ice Cream</option> 
        </Select>
        <button className='btn' type='submit'>Creat</button>
        </div>
    </form>
  );
};

export default Form;