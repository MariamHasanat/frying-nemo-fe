import { useState } from "react";
import Input from "../input/input.component";
import "./multivalue-input.css";
import "../../../common.css";
/**
 * @param {{
 *  label?: string;
 *  value: string[];
 *  onChange: (value: string[]) => void;
 * }} props
 */
const MultivalueInput = (props) => {
  const [newItemValue, setNewItemValue] = useState("");
  const addItem = () => {
    if (newItemValue.trim().length > 0 && !props.value.includes(newItemValue)) {
      props.onChange([...props.value, newItemValue]);
    }
    setNewItemValue('')
  };
  return (
    <div className="multivalueInputWrapper">
      <div className="controls">
        <Input
          label={props.label}
          value={newItemValue}
          onChange={(e) => setNewItemValue(e.target.value)}
        />
        <button className="nemo-button" type="button" onClick={addItem}>
          Add
        </button>
      </div>
      {props.value.length > 0 && (
        <ul>
          {props.value.map((item) => {
            return (
              <li key={item}>
                <span>{item}</span>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => {
                    const valueCopy = [...props.value];
                    valueCopy.splice(valueCopy.indexOf(item), 1);
                    props.onChange([...valueCopy]);
                  }}
                >
                  &times;
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MultivalueInput;
