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
  const [newItemValue, setNewItemValue] = useState('');

  const addItem = () => {
    // Add new item to existing array and call inform parent of change
    // Validate new item is not empty and does not exist in the original array
    if (newItemValue.trim().length > 0 && !props.value.includes(newItemValue)) {
      const valueAfterAddition = [...props.value, newItemValue];
      props.onChange(valueAfterAddition);
      //props.value = valueAfterAddition ;
      setNewItemValue('');
    }

  };

  return (
    // <div className="multivalueInputWrapper">
    //   <div className="controls">
    //     <Input
    //       label={props.label}                
    //       value={newItemValue}
    //       onChange={e => setNewItemValue(e.target.value)}
    //     />
    //     <button
    //       className="nemo-button"
    //       type="button"
    //       onClick={addItem}
    //     >
    //       Add
    //     </button>
    //   </div>
    //   {
    //     props.value.length > 0 && (
    //       <ul>
    //         {props.value.map(item => {
    //           return (
    //             <li key={item} >
    //               <span>{item}</span>
    //               <button
    //                 type="button"
    //                 onClick={() => {
    //                   const valueAfterRemoval = props.value.filter(element => element !== item);
    //                   props.onChange(valueAfterRemoval);
    //                 }}
    //               >&times;</button>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     )
    //   }
    // </div>
    <div className="multivalueInputWrapper">
      <div className="controls">
        {/* Input goes here */}
        <Input
          label={props.label}
          onChange={e => setNewItemValue(e.target.value)}
          value = {newItemValue}
        />
        <button
          className="nemo-button"
          type="button"
          // Handel addition of new item (On click)
          onClick={addItem}
        >
          Add
        </button>
      </div>
      {/* Render list of items */}
      {/* Do not render list if incoming value has no items */}
      {
        props.value.length  && (
          <ul>
            {props.value.map(item => {
              return (
                <li key={item}>
                  <span>{item}</span>
                  <button type="button"
                    onClick={() => {
                      const valueAfterRemove = props.value.filter(element => element !== item) ;
                      props.onChange (valueAfterRemove) ;
                    }}
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