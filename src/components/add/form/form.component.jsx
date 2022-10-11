import { useState } from 'react';
import './form.css';
import Input from '../common/input/input.component';
import Button from '../common/button/button.component';
import Textarea from '../common/textarea/textarea.component';
import Select from '../common/select/select.component';
import MultivalueInput from '../common/multivalue-input/multivalue-input.component';

const Form = (props) => {
  const [name, setName] = useState(``)
  let ings = [] // Ingredients
  const updateIngs = (newIngs) => {
    ings = newIngs;
  }

  const submitHandler = e => {
    const resetForm = () => {
      e.target.reset();
      setName('')
      updateIngs([])
    }
    
    e.preventDefault();
    const description = e.target.description.value
    const price = e.target.price.value
    const category = e.target.category.value

    const menuItems = {
      name,
      description,
      price,
      category,
      ings
    }
    let arr = JSON.parse(localStorage.getItem('menuItems')) || [];
    arr.push(menuItems)
    localStorage.setItem('menuItems', JSON.stringify(arr));
    resetForm();
  }


  const changeName = (value) => {
    const isAllowed = (char) => {
      console.log(`char: ${char}`)
      if (char === ' ') {
      }
      const allowed = [['a', 'z'], ['A', 'Z'], [' ', ' '], ['0', '9']]
      for (let i = 0; i < allowed.length; i++) {
        if (char >= allowed[i][0] && char <= allowed[i][1]) {
          return true;
        }
      }
      return false;
    }
    if (value.target.value.length > 20) alert(`You can't enter more than 20 characters`)
    else if (isAllowed(value.nativeEvent.data)) setName(value.target.value.replace('find', 'fry'))
    else alert(`Denied character (${value.nativeEvent.data})`)
  }

  return (
    <form className='add-form' onSubmit={submitHandler}>
      <div className='inputs'>
        <Input name='name' label="Name" value={name} onChange={changeName} required></Input>
        <Textarea name='description' label="Description" ></Textarea>
        <Input name="price" label="Price" type="number" required></Input>
        <Select name='category' items={[`Fish`, `Shisha`, `Drink`]} required></Select>
        <MultivalueInput onChange={updateIngs} name='ingredients' label='Ingredients'/>
        <Button name="SUBMIT" type="submit"></Button>
      </div>
    </form>
  );
};

export default Form;