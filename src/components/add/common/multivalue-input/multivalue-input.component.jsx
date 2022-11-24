import './multivalue-input.css';
import Input from '../input/input.component';
import Button from '../button/button.component';
import MultivalueList from './multivalue-list/multivalue-list.component';
import { useState } from 'react';

const MultivalueInput = ({ label, onChange }) => {
  
  const [itemName, setItemName] = useState('')
  const [ingredients, setIngredients] = useState([])

  const addIngredient = () => {
    if (ingredients.includes(itemName)) {
      setItemName('')
      return;
    }
    let ings = [...ingredients, itemName];
    setIngredients(ings)
    onChange(ings)
    setItemName('')
  }

  const removeIngredient = (itemName) => {
    if (itemName == '') {
      setIngredients([])
      onChange([])
      return;
    }
    let ings = ingredients.filter(item => (itemName != item));
    setIngredients(ings)
    onChange(ings)
  }

  const changeItemNameInput = (value) => {
    setItemName(value)
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