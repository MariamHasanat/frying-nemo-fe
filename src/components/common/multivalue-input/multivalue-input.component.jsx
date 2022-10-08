import { useState } from 'react';
import Input from '../input/input.component';
import './multivalue-input.css';

/**
 * 
 * @param {{
 * label?:string;
 * value?: string[];
 * onChange: (value: string[]) => void
 * }} props 
 * @returns 
 */
const MultivalueInput = props => {
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim().length > 0 && !props.value.includes(newItem))
      props.onChange([...props.value, newItem]);
  };
  let tempList = [];

  const removeItem = (item) => {
    tempList = [...props.value];
    const index = tempList.indexOf(item);
    if (index >= -1) {
      tempList.splice(index, 1);
    }
    props.onChange(tempList);
  };
  
  return (
    <div className='multivalue-container'>
      <div className='input-container'>
        <Input
          label='Ingredients'
          onChange={e => setNewItem(e.target.value)}
        />
        <button type='button' onClick={addItem}>+</button>
      </div>
      {
        props.value.length > 0 && (
          <ul>{
            props.value.map(e => {
              return (
                <li key={e}><span>
                  {e}
                </span>
                  <button type='button' onClick={() => removeItem(e)}>&times;</button>
                </li>
              );
            })}
          </ul>

        )
      }

    </div>
  );
};

export default MultivalueInput;