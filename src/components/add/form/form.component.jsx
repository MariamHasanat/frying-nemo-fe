import { useState } from 'react';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/multivalue-input/multivalue-input/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState('Raghad');
  const [ingredients, setIngredients] = useState([]);
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
  const catigories = ["Salads", "Main Dishes", "Drinks", "Sweets"];
  return (
    <form className='addForm' onSubmit={handle}>
      <Input
        className='input-group'
        label="Name"
        value={name}
        required
        onChange={nameChange}
      />
      <Textarea
        label="Discription"
        className='textarea-group'
      />
      <Input
        className='input-group'
        type="number"
        label="Price"
        required
        min={0}
      />
      {/* using array mapping */}
      <Select label='Select'>
        {catigories.map(item =>
          <option key={item} value={item}>{item}</option>
        )}
        {/* key must be mintions */}
      </Select>
      <MultivalueInput
      onChange={item => setIngredients (item)}
      value = {ingredients}

      />

      {/* <Select label='Select' required>
        <option value="salad">Salads</option>
        <option value="salad">Main Dishes</option>
        <option value="salad">Drinks</option>
        <option value="salad">Sweets</option>
      </Select> */}
      <div className='addFormButtons'>
        <button
          type='submit'
          className='formComp nemo-button'
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default Form;
