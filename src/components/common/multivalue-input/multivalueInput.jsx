import { useState } from 'react';
import Input from '../input/input.component';
import './multivalueInput.component.css';


/**
 * component receive values and make list of them
 * @param {{
 *  label?:string;
 *  value: string[];
 *  onChange(value: string[]) => void;
 * }} props 
 */
const MultivalueInput = (props) => {
    const [newItem, setNewItem] = useState('');
    const addItem = () => {
        if (newItem.trim().length > 0 && !props.value.includes(newItem)) {

            props.onChange([...props.value, newItem]);
            setNewItem('');
        }
    };
    return (
        <div className='wrapper'>
            <div>
                <Input
                    label={props.label}
                    value={newItem}
                    onChange={(e) => { setNewItem(e.target.value); }}
                />
                <button
                    type='button'
                    className='nemo-button'
                    onClick={addItem}
                >
                    Add</button>
            </div>
            {
                (props.value.length > 0) && (
                    <ul>
                        {props.value.map(item => {
                            return (
                                <li key={item} >
                                    {item}
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