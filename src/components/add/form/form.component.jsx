import { useState } from 'react';
import Input from './input/input.component';
import Textarea from '../../../textarea/textarea/textarea.component';
import './form.css';
import Select from './select/select.component';
import MultivalueInput from './multivalue-input/multivalue-input.component';

const categories = [
  'fish',
  'salad',
  'juice',
  'meat',
  'chicken',
  'bread'
];

const Form = (props) => {
  const [name, setName] = useState('Huda');
  const [ingredients, setIngredients] = useState([]);

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = e => {
    e.preventDefault();

    /**
     * @type {HTMLFormElement}
     */
    const target = e.target;
    console.debug(target.ATTRIBUTE_NODE);
  };

  const onNameChange = e => {
    let value = e.target.value;
    if (value.includes('find')) {
      value = value.replace('find', 'fry');
    }
    setName(value);
  };
  return (
    <form className="addForm" onSubmit={submitHandler} >
      <div style={{ marginTop: 20 }}>
        <Input
          label="Name"
          value={name}
          onChange={onNameChange}
          required
        />
        <Textarea
          label="Description"
        />
        <Input
          label="Price"
          required
        />
        <Select label='category' required>
          {categories.map(item => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </Select>
        <MultivalueInput
          label='Ingredients'
          value={ingredients}
          onChange={newIngredients => setIngredients(newIngredients)}
        />
        <button className='addFormButtons' type="submit">Create</button>
      </div>
    </form>
  );
};

export default Form;
