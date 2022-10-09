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
  const [newItemValue, setNewItemValue] = useState('');

  const addItem = () => {
    if (newItemValue.trim().length > 0 && !props.value.includes(newItemValue)) {
      props.onChange([...props.value, newItemValue]);
    }
    setNewItemValue('');
  };
  
  
  //const DeleteItem = (item) => {
  //   var newList = [];
  //   newList = [...props.value];
  //   const index = newList.indexOf(item);
  //   if (index >= 0) {
  //     newList.splice(index, 1);
  //   }
  //   props.onChange(newList);
  // };
  const removeItem=(item)=>{
    const afterRemove=props.value.filter(element=> element !== item);
    props.onChange(afterRemove);
  };
return (
    <div className="Multivalue-input">
      <div className="input">
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
        //render if value >0
        props.value.length > 0 && (
          <ul>
            {props.value.map(item => {
              return (
                <li key={item} >
                  <span>{item}</span>
                  <button type="button" onClick={()=> removeItem(item)
                   }  >&times;</button>
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