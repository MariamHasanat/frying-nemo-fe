import { useState } from 'react';
import Input from '../../input/input.component';
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
  const [ingredient , setIngredient] = useState ('') ;

  const addItem = () => {
    // Add new item to existing array and call inform parent of change
    // Validate new item is not empty and does not exist in the original array
  };

  return (
    <div className="multivalueInputWrapper">
      <div className="controls">
        {/* Input goes here */}
        <Input  
        label={props.label}
        onChange = {item => setIngredient (item)}
        />
        <button
          className="nemo-button"
          type="button"
        // Handel addition of new item (On click)
        
        >
          Add
        </button>
      </div>
      {/* Render list of items */}
      {/* Do not render list if incoming value has no items */}
      {
        value.trim().length && !value.include (ingredient) && {
          return ( value.map ( item => 
            {<ul>
              <li>
                <span>{item}</span>
                <button type="button">&times;</button>
              </li>
            </ul>
}
          )
        }
      }
      
    </div>
  );
};

export default MultivalueInput;