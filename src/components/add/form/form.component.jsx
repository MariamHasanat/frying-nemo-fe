import { useState } from 'react';
import './form.css';
import Input from '../../../common/input/input.common';
import Textarea from '../../../common/textarea/textarea.component';
import Select from '../../../common/Select/Select';

const Form = (props) => {
  const [name, setName] = useState('dala');
  
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
  };
  
  const onNamechange = e => {
    
    let val = e.target.value;
    
    if (val.includes('.')) {
      val = val.replace('.', '');
    }
    
    if (/find/ig.test(val)) {
      val = val.replace(/find/ig, 'fry');
    }
    
    if (val.length > 20) {
      alert('charecter limit excedded');
      val = val.substring(0, 20);
    }
    setName(val);
  };
  
  const Category = [
    "Fish",
    "Drinks",
    "Hookah",
    "salad",
    "Sandwiches",
    "Main Dishes",
    "Appetizers",
    "Ice Craem",
  ]

  return (
    <form className='add-form' onSubmit={handler}>
      <div style={{ margintop: 20 }}>
        <Input
          label="Name"
          value={name}
          onChange={onNamechange}
          required
          />
        <Input
          label="Price"
          type="number"
          min={0}
          required
        />

        <Textarea
          label="Describtion"
        />
        <Select label="Category" required>
        {Category.map(item =>  {
          return <option key={item} value={item}>{item}</option>
        })}
        </Select>
        <button className='btn' type='submit'>Creat</button>
      </div>
    </form>
  );
};

export default Form;