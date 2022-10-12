import { useState } from 'react';
import Input from '../../common/input/input';
import Multiinput from '../../common/maltiinput-value/multiinput';
import Select from '../../common/select/select';
import Textarea from '../../common/textarea/textarea.component';

import './form.css';
const Form = (props) => {
  const [ingredients,setIngredients]=useState([]);
  const [name, setname] = useState('Sajeda');
  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e 
   */
  const handleSubmit = (e) => {
    e.preventDefult();

    const price=Number(e.target.price.value);
    const description =e.target.description.value;
    const category = e.target.category.value;
    const menuItem = {
      name: name,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };
    const itemJ = localStorage.getItem('menuItem');
    const items = JSON.parse(itemJ)||[];
    items.push(menuItem);
    localStorage.setItem('menuItem',JSON.stringify(items));
   props.onNavigate('view');
    console.log(price);
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
          name = 'description'
        />
        <Input
          label="Price"
          name = 'price'
          type="number"
          min={0}
          required
        />
        <Select
          label="The Chioce"
          name ='category'
          required
        >
          {categories.map(item => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </Select>
       <Multiinput 
       label="Ingradaint"
       value={ingredients}
       onChange={newIngredients=>setIngredients(newIngredients)}
       />


      </div>
      <button  className='nemo'  type='submit' >Creat</button>
    </form>
  );
};
export default Form;
