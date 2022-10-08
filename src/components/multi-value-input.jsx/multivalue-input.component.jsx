import { useState } from 'react';
import Input from '../common/input/input.component';
import './multivalue-input.css';
import '../../common.css';
/**
 * @param {{
 *  label?: string;
 *  value: string[];
 *  onChange: (value: string[]) => void;
 * }} props 
 */
const MultivalueInput = (props) => {
  const [newItemValue, setNewItemValue] = useState('');
  const addItem = () => {
    if (newItemValue.trim().length > 0 && !props.value.includes(newItemValue)) {
      props.onChange([...props.value, newItemValue]);
    }
  };
  const removeItem = (index) => {
    props.value.splice(index, 1);
  };
  return (
    <div className="multivalueInputWrapper">
      <div className="controls">
        <Input
          label={props.label}
          value={newItemValue}
          onChange={e => setNewItemValue(e.target.value)}
        />
        <button
          className="nemo-button"
          type="button"
          onClick={addItem}
        >
          Add
        </button>
      </div>
      {
        props.value.length > 0 && (
          <ul>
            {props.value.map(item => {
              return (
                <li key={item} >
                  <span>{item}</span>
                  <button type="button" className='remove-btn'
                    onClick={removeItem(props.value.indexOf(item))}>&times;</button>
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