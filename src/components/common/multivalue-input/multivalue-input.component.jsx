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

  const [newItem, setNewItem] = useState();
  // Define a state for your input component.
  // this state will store the item to be added to the list.

  const addItem = () => {
    // Add new item to existing array and call inform parent of change
    // Validate new item is not empty and does not exist in the original array
    if (props.value.length && !props.value.includes(newItem)) {
      // props.value.pus
    }

  };

  return (
    <div className="multivalueInputWrapper">
      <div className="controls">
        {
          /* Input goes here */
          <Input
            label={props.label} />
        }
        <button
          className="nemo-button"
          type="button"
          onClick={addItem}
        // Handel addition of new item (On click)
        >
          Add
        </button>
      </div>
      {
        /* Render list of items */
        props.value.map(item => {
          <ul>
            <li>
              <span>{item}</span>
              <button type="button">&times;</button>
            </li>
          </ul>;
        })
      }
      {/* Do not render list if incoming value has no items */}
      {/* 
        <ul>
          <li>
            <span>{item}</span>
            <button type="button">&times;</button>
          </li>
        </ul>
       */}
    </div>
  );
};

export default MultivalueInput;