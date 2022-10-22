import { useState } from 'react';
import './form.css';
import Input from '../../../common/input/input.component';
import Textarea from '../../../common/textarea/textarea.component';
import Select from '../../../common/Select/Select';
import MultivalueInput from '../../../common/multivalue-input/multivalue-input.component';

const Form = (props) => {
  const [name, setName] = useState('dala');
  const [ingredients, setIngredients] = useState([]);
  /**
   * Handles on change events on the name field.
   * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
   */

  const handler = e => {

    e.preventDefault();
    /**
     * @type {HTMLformElement}
     */

     const description = e.target.description;
    // const image = e.target.image.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;


     
    const menuItem = {
      name: name,
      // image,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };

    
    const itemJson = localStorage.getItem('menuItem') || '[]';
    const items = JSON.parse(itemJson);
    items.push(menuItem);
    localStorage.setItem('menuItem' , JSON.stringify(items));

    props.onNavigate('view');
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
          // name = "name"
          label="Name"
          value={name}
          onChange={onNamechange}
          required
          />
        <Input
          name ="price"
          label="Price"
          type="number"
          min={0}
          required
        />

        <Textarea
          name="describtion"
          label="Describtion"
          // value={props.description}
        />
        <Select 
        name="category"
        label="Category" 
        required>
        {Category.map(item =>  {
          return <option key={item} value={item}>{item}</option>
        })}
        </Select>
        <MultivalueInput 
          label="Ingrediants"
          value={ingredients}
          onChange={newIngredients => setIngredients(newIngredients)}
        />
        <div className="create-btn">
          <button className="nemo-button" type="submit">Creat</button>
          </div>
      </div>
    </form>
  );
};

export default Form;