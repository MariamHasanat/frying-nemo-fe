import { useState } from 'react';
import Select from '../../../common/Select/Select';
import Textarea from '../../../common/textarea/textarea';
import Input from '../../../common/input/input';
import './form.css';
import MultivalueInput from '../../../common/multivalue-input/multivalue-input.component';
import Image from '../../../common/image/Image';
import { useNavigate } from 'react-router-dom'




/**
 * 
 * @param {React.ChangeEvent<HTMLInputElement>} e 
 */
const Form = (props) => {
  const navigate = useNavigate()
  const [name, SetName] = useState('Add item');
  const [ingredients, setIngredients] = useState([]);
  const submitHandler = e => {
    e.preventDefault();

    const description = e.target.description.value;
    const image = e.target.image.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;

    const menuItem = {
      id: Date.now(),
      name: name,
      id:Date.now(),
      image,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };

    const itemsJson = localStorage.getItem('menuItems');
    const items = JSON.parse(itemsJson) || [];

    items.push(menuItem);

    localStorage.setItem('menuItems', JSON.stringify(items));
    navigate("/view")

  };

  const onChange1 = e => {

    let value = e.target.value;
    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, "fry");

    }
    if (value.length > 20) {
      alert("more than 20 char");
      value = "";
    }
    SetName(value);
  };

  const category = [ "Fish", "Meat", "Hooka", "Salads", "Sandwich", "Appetizers", "Ice cream", "Drinks","Main Dishes"]
    ;
  return (
    <form className='item-page' onSubmit={submitHandler}>
      <br />
      <div className='div1'>
        <Input
          label="Name "
          value={name}
          onChange={onChange1}
          required

        />
        <br />
        <Input
          label="Price"
          type='number'
          name='price'
          required

        />
        <br></br>
        <Image required name="image" label="Image" onSubmit={e=>{console.log(e.target.value)}}>
        </Image>


        <br />
        <Textarea
          name='description'
          label='Description' />
        <br></br>
        <Select name='category' label='Category' required>
          {category.map(item => {
            return <option value={item} key={item}>{item}</option>;

          })}
        </Select>


        <MultivalueInput
          label="Ingredients"
          value={ingredients}
          onChange={newIngredients => setIngredients(newIngredients)}

        />

        <button className='point' type='sumbit' >Create</button>
      </div>
    </form>
  );
};

export default Form;