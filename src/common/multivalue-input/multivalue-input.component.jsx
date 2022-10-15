import { useState } from 'react';
import Input from '../input/input.component';
import './multivalue-input.css';

/**
 * Renders an input component and a list of values.
 * @param {{
 *  label?: string;
 *  value: string[];
 *  onChange: (value: string[]) => void;
 * }} props 
 */
const MultivalueInput = props => {
  // Define a state for your input component.
  // this state will store the item to be added to the list.

  const [newItemValue, setNewItemValue] = useState('');

  const addItem = () => {
    if (newItemValue.trim().length > 0 && !props.value.includes(newItemValue)) {
      // props.onChange([...props.value, newItemValue]);
      const valueAfterAddition = [...props.value, newItemValue];
      props.onChange(valueAfterAddition);
      setNewItemValue('');
    }
  };

  return (
    <div className="multivalueInputWrapper">
      <div className="controls">
        {/* Input goes here */}
        <Input
          label="INGREDIENTS"
          value={newItemValue}
          onChange={e => setNewItemValue(e.target.value)}
        />
        <button
          className="nemo-button"
          type="button"
          onClick={addItem}
        // Handel addition of new item (On click)
        >
          Add
        </button>
      </div>
      {/* Render list of items */}
      {/* Do not render list if incoming value has no items */}
      {
        props.value.length > 0 &&
        (
          <ul>
            {props.value.map(item => {
              return (
                <li key={item}>
                  <span>{item}</span>
                  <button
                    type="button"
                    onClick={() => {
                      const valueAfterRemoval = props.value.filter(element => element !== item);
                      props.onChange(valueAfterRemoval);
                    }
                    }
                  >&times;</button>
                </li>);
            })}
          </ul>
        )
      }
    </div>
  );
};

export default MultivalueInput;