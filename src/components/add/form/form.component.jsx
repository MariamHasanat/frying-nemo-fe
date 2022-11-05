import { useState } from 'react';
import './form.css';
import Input from '../../../common/input/input.component';
import Textarea from '../../../common/textarea/textarea.component';
import Select from '../../../common/Select/Select';
import MultivalueInput from '../../../common/multivalue-input/multivalue-input.component';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../../data/category';

const Form = (props) => {
  const [name, setName] = useState('dala');
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  /**
   * Handles on change events on the name field.
   * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
   */

  const handler = e => {

    e.preventDefault();
    /**
     * @type {HTMLformElement}
     */

     const description = e.target.description.value;
    // const image = e.target.image.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;
    const image = e.target.image.value;

     
    const menuItem = {
      name: name,
      // image,
      description: description,
      image,
      price: price,
      category: category,
      ingredients: ingredients
    };

    
    const itemJson = localStorage.getItem('menuItems') || '[]';
    const items = JSON.parse(itemJson);
    items.push(menuItem);
    localStorage.setItem('menuItems' , JSON.stringify(items));

   navigate('/view');
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
          <Input
        label="Image"
        name="image"
        required
      />
        <Textarea
          name="description"
          label="Description"
          // value={props.description}
        />
        <Select 
        name="category"
        label="Category" 
        required>
        {CATEGORIES.map(item =>  {
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