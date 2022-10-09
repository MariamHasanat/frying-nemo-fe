import './multivalue-input.css';
import Input from '../input/input.component';
import Button from '../button/button.component';
import MultivalueList from './multivalue-list/multivalue-list.component';
import { useState } from 'react';

const MultivalueInput = ({ label }) => {
  
  const [itemName, setItemName] = useState('')
  const [ingredients, setIngredients] = useState([])

  const addIngredient = () => {
    if (ingredients.includes(itemName)) {
      setItemName('')
      return;
    }
    setIngredients([...ingredients, itemName])
    setItemName('')
  }

  const removeIngredient = (itemName) => {
    if (itemName == '') {
      setIngredients([])
      return;
    }
    setIngredients(ingredients.filter(item => (itemName != item)))
  }

  const changeItemNameInput = (value) => {
    setItemName(value)
    console.log('hey')
  }

  return (
    <div className='multivalueInputWrapper'>
      <div style={{marginBottom: '0px'}} className='controls'>
        <Input
          label={label}
          width='100%' rmBorder value={itemName} onChange={e => {changeItemNameInput(e.target.value)}}></Input>
          <Button rmBorder name='>' width='50px' type='button' onClick={() => {addIngredient()}}></Button>
      </div>
      <div className='data'>
        {ingredients.length != 0 && <MultivalueList data={ingredients} removeIngredient={removeIngredient}></MultivalueList>}
      </div>
    </div>
  );
};

export default MultivalueInput;