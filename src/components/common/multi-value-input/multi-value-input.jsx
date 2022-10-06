import { useState } from "react";
import Input from "../input/input";



/**
 * 
 * @param {{
 * label ? : string;
 * value :string[];
 * onchange: (value :string[])=> void;
 * }} props 
 * 
 */

const MultivalueInput = (props) => {
const [newitem, setItem]=useState('');


  return (


    <div>

      <div>
        <Input
          label={props.label}
          value={newitem}
          onchange={e=> setItem(e.target.value)}
        />
        <button type="button">Add</button>
      </div>
    
{

  <ul>
{  props.value.map(item=>
    {
      return (
        <li key ={item}>
          <span>{item}</span>
          <button>&times;</button>
        </li>
        
    )
  }
  )
  }
  </ul>
}


    </div>
  );

};
export default MultivalueInput;


