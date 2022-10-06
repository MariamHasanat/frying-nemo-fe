import React from 'react';
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
  const
  return (
    <div className="multivalue-input-counter">
      <div className="controls">
        <Input
          label={props.label} />
        <button type="button">Add</button>
      </div>
      <ul>
        {props.value.map(e => {
          return (
            <li key={e}>
              <span>{e}</span>
              <button></button>
            </li>
          );
        })}

      </ul>
    </div>
  );
};

export default MultivalueInput;

