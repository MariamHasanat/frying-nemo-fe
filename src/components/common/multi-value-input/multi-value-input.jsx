
import { useState } from "react";
import Input from '../input/input';
import './multi-value-input.css';

/**
 * 
 * @param {{
 * label ? :string;
 * value:string[];
 * onChange: (value: string[]) => void;
 * 
 * }} props 
 * 
 */

const MultivalueInput = props => {

  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if(newItem.trim().length >0 && !props.value.includes(newItem))
    {
      props.onChange([...props.value, newItem]);
    }
  };

const delet =(index)=> {
}
  return (
    <div className="multivalue">

      <div className="wrapper">
        <Input
          label={props.label}
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        ></Input>

        <button className="nemo-button" onClick={addItem} >Add</button>
      </div>
      {

          props.value.length > 0 && (
           <ul>
              {props.value.map(item => {
                return (
                  <li key={item} >
                    <span>{item}</span>
                    <button type="button" onClick={()=>delet(item)}>&times;</button>
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