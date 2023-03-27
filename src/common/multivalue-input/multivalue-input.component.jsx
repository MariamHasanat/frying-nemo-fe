import { useState } from 'react';
import Input from '../input/input';
import './multivalue-input.css';


/**a
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
  };
  const removeitem = (item) => {

    const newlistafteremove = props.value.filter(elemnt => elemnt !== item);
    props.
      onChange(newlistafteremove);
  };
  return (
    <div className="multivalueInputWrapper">
      <div >
        <Input
          label={props.label}
          value={props.newItemValue}
          onChange={e => {
            setNewItemValue(e.target.value);
          }}
          required />
        <button
          className='bou'
          type="button"
          onClick={(e) => {
            addItem();
           
          }}
        >
          +
        </button>
      </div>
      {
        props.value.length > 0 && (
          <ul >
            {props.value.map(item => {
              return (
                <li key={item}  >
                  <span>{item}</span>
                  <button type="button" onClick={() => { removeitem(item); }}>&times;</button>
                </li>
              );
            })}
          </ul>
        )
      }<br></br>
    </div>
  );
};

export default MultivalueInput;