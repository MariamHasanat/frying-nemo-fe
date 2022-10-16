import { useState } from 'react';
import Input from '../../common/input/input-component';
import Textarea from '../../common/textarea/textarea-component';
import Select from '../../common/select/select-component';
import MultiValuInput from '../../common/multivalue-input/input-component';
import './form.css';


const categories = [
  'Fish',
  'Drinks',
  'Hookah',
  'Salads',
  'Sandwiches',
  'Appetizers',
  'Main Dish',
  'Sweet'
];

const Form = (props) => {

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e Event Object. 
   */
  const submitHandler = e => { // this function handling the form 
    e.preventDefault(); // don't refresh and don't take me to another page

    // e.target == Form
    const description = e.target.description.value;
    const price = e.target.price.value;
    const category = e.target.category.value;

    // object
    const menuItems = {
      name,
      description,
      price,
      category,
      ingredients,
    };

    const itemsJson = localStorage.getItem('menuItems') || '[]'; // local storage take string 
    const items = JSON.parse(itemsJson); // convert string to javascript object
    items.push(menuItems);

    localStorage.setItem('menuItems', JSON.stringify(items)); // convert javascript object to string

    props.onNavigate('view');
  };

  const onNameChange = e => {
    let value = e.target.value;
    if (value.length > 20) {
      alert("Noooooooo Please !!!!! toooo much");
      value = value.substring(0, 20);
    }
    if (value.includes("find")) {
      value = value.replace("find", "fry");
    }
    setName(value);
  };

  return (
    <form className='add-form' onSubmit={submitHandler}>
      <div style={{ marginTop: 20 }}>
        <Input
          label="Name"
          value={name}
          onChange={onNameChange}
          required
        />
        <Textarea
          name="description"
          label="Description"
        />
        <Input
          name="price"
          label="Price"
          type="number"
          required
          min={0}
        />
        <Select name="category" label="Category" required>
          {categories.map(item => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </Select>
        <MultiValuInput
          label='ingredients'
          value={ingredients}
          onChange={newIngredients => setIngredients(newIngredients)}
        />
        <button type='submit' className='create'>Create</button>
      </div>
    </form>
  );
};

export default Form;