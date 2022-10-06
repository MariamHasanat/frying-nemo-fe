import './multivalue-input.css';
import Input from '../input/input.component';
import { useState } from 'react';

/**
 * Render an input component and a list of values.
 * @param {{
 * label?:string;
 * value: string[];
 * onChange: (value: string[]) => void;
 * }}props
 */

const MultivalueInput = props => {
  const [newItemValue, setNewItemValue] = useState('');
  const addItem = () => {
    props.onChange(...props.value, newItemValue);
  };

  return (
    <div className='multivalueInputWrapper'>
      <div className='controls'>
        <Input
          label={props.label}
          value={newItemValue}
          onChange={e => setNewItemValue(e.target.value)}
        />
        <button
          className='add-button'
          type='button'
          onClick={addItem}
        >
          Add
        </button>
      </div>
      {
        props.value.length > 0 && (
          <ul>
            {props.value.map(item => {
            return(
              <li key={item}>
                <span>{item}</span>
                <button type='button'>&times;</button>
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