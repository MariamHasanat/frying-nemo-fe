import React, { useState } from 'react';
import './multivalue-input.css';
import Input from '../../common/input/input.component';

/**
 * Renders an input element.
 * @param {{
 * label?: string;
 * value: string[];
 * onChange: (value: string[]) => void
 * }}props
 */

const MultivalueInput = (props) => {
  const [NewItemValue, SetItemValue] = useState('');


  const addItem = () => {
    // if (NewItemValue.trim().length > 0 && !props.value.includes(NewItemValue)) {
    // props.onChange([...props.value, NewItemValue]);
    const valueAfterAddition = [...props.value, NewItemValue];
    props.onChange(valueAfterAddition);
  };





  return (
    <div className="multivalue-input-counter">
      <div className="controls">
        <Input
          label={props.label}
          onChange={e => SetItemValue(e.target.value)} />
        <button type="button" onClick={addItem}>Add</button>
      </div>
      <ul>
        {props.value.map(e => {
          return (
            <li key={e}>
              <span>{e}</span>
              <button onClick={() => {
                const valueAfterRemove = [...props.value].filter(item => item !== e);
                props.onChange(valueAfterRemove);
              }}>x</button>
            </li>
          );
        })}

      </ul>
    </div>
  );
};

export default MultivalueInput;

