import './multivalue-input.css';
import Input from '../input/input.component';
import Button from '../button/button.component';
import MultivalueList from './multivalue-list/multivalue-list.component';
import { useState } from 'react';

const MultivalueInput = ({ label }) => {
  
  const [itemName, setItemName] = useState('Text here')
  const [ingredients, setIngredients] = useState([])

  const addIngredient = () => {
    setIngredients([...ingredients, {itemName: itemName}])
  }

  const changeItemNameInput = (value) => {
    setItemName(value)
    console.log('hey')
  }

  return (
    <div className='multivalueInputWrapper'>
      <div className='controls'>
        <Input
          label={label}
          required width='100%' rmBorder value={itemName} onChange={e => {changeItemNameInput(e.target.value)}}></Input>
        <Button rmBorder name='>' width='50px' type='button' onClick={() => {addIngredient()}}></Button>
      </div>
      <div className='data'>
        <MultivalueList data={ingredients}></MultivalueList>
      </div>
    </div>
  );
};

export default MultivalueInput;