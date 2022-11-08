import { useContext, useState } from 'react';
import './form.css';
import Input from '../common/input/input.component';
import Button from '../common/button/button.component';
import Textarea from '../common/textarea/textarea.component';
import Select from '../common/select/select.component';
import MultivalueInput from '../common/multivalue-input/multivalue-input.component';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../../data/constants';
import { getRandom } from '../../../services/utilities';
import { UserContext } from '../../../App';

const Form = () => {
  const {user} = useContext(UserContext)
  const navigate = useNavigate();

  const [name, setName] = useState(``)
  let ingredients = [] // Ingredients
  const updateIngs = (newIngs) => {
    ingredients = newIngs;
  }

  const submitHandler = e => {
    const resetForm = () => {
      e.target.reset();
      setName('')
      updateIngs([])
      navigate('/view')
    }
    
    e.preventDefault();
    const id = getRandom()
    const description = e.target.description.value
    const price = e.target.price.value
    const category = e.target.category.value
    const image = e.target.image.value

    const menuItems = {
      id,
      name,
      description,
      price,
      category,
      image,
      ingredients
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
        <Input name="image" label="Image" type="text" required></Input>
        <Select name='category' items={CATEGORIES} required></Select>
        <MultivalueInput onChange={updateIngs} name='ingredients' label='Ingredients'/>
        <Button disabled={user.role !== 'ADMIN'} name="SUBMIT" type="submit"></Button>
      </div>
    </form>
  );
};

export default Form;