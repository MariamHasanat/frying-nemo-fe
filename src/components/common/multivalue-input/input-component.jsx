import './multivalue-input.css';
import Input from '../input/input-component';
import { useState } from 'react';


/**
 * Renders an input component and a list of values.
 * @param {{
 * label?:string;
 * value:string[];
 * onChange:(value: string[]) => void
 * }} props 
 *  
 */
const MultiValuInput = props => {

  const [newItemValue, setNewItemValue] = useState('');
  const addItem = () => {
    if (newItemValue.trim().length > 0 && !props.value.includes(newItemValue)) {
      props.onChange([...props.value, newItemValue]);
    }
  };
  return (
    <div className='multivalue-input-wrapper'>
      <div className='controls'>
        <Input
          label={props.label}
          value={newItemValue}
          onchange={e => setNewItemValue(e.target.value)}
        />
        <button t
        ype='button' 
        className='add'
        onClick={addItem}
        >
          Add
          </button>
      </div>

    </div>
  );
};
export default MultiValuInput;