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
      setNewItemValue('');
    }
  };
  const removeItem = (item) => {
    const valueAfterRemoval = props.value.filter(element => element !== item);
    props.onChange(valueAfterRemoval);
  };

  return (
    <div className='multivalue-input-wrapper'>
      <div className='controls'>
        <Input
          label={props.label}
          value={newItemValue}
          onChange={e => setNewItemValue(e.target.value)}
        />
        <button
          type='button'
          className='add'
          onClick={addItem}
        >
          Add
        </button>
      </div>
      {
        props.value.length > 0 && (
          <ul>
            {
              props.value.map(item => {
                return (
                  <li key={item}>
                    <span>{item}</span>
                    <button type='button' onClick={() => removeItem(item)}>&times;</button>
                  </li>
                );
              })
            }
          </ul>
        )
      }
    </div>
  );
};
export default MultiValuInput;