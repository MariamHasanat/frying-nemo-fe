import { useState } from 'react';
import Input from '../../common/input/input';
import Multiinput from '../../common/maltiinput-value/multiinput';
import Select from '../../common/select/select';
import Textarea from '../../common/textarea/textarea.component';

import './form.css';
const Form = (props) => {
  const [name, setname] = useState('Sajeda');
  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e 
   */
  const handleSubmit = (e) => {
    e.preventDefult();
  };
  const onNameChange = (e) => {
    let value = e.target.value;
    if (value.includes('.')) {
      alert('Wrong input');
      value.replace('.', '');
    }
    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, 'fry');
    }
    if (value.lenght >= 20) {
      value = value.substring(0, 18);
    }
    setname(value);
  };
  const categories = [
    'Fish',
    'Shrimmps',
    'Drink',
    'Mussels',
    'shesha',
    'Ice cream',
  ];
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='input'>
        <Input
          label='name'
          value={name}
          onChange={onNameChange}
          requird
        />
        <Textarea
          label="Discripion"
        />
        <Input
          label="Price"
          type="number"
          min={0}
          required
        />
        <Select
          label="The Chioce"
        >
          {categories.map(item => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </Select>
       <Multiinput label="Ingradaint"/>


      </div>
      <button  className='nemo'  type='submit' >Sign in</button>
    </form>
  );
};
export default Form;
