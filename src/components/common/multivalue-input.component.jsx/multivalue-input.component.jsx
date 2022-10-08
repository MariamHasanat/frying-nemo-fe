import { useState } from 'react';
import Input from '../input/input.component';
import './multivalue-input.css';

/**
 * 
 * @param {{
 * lable?: string
 * value: string[]
 * onChange (value: string) => void
 * }} props 
 * @returns 
 */
const Multivalue = (props) => {
    const [newItem, setNewItem] = useState('');
    const addItem = () => {
        if (newItem.trim().length && !props.value.includes(newItem)) {
            props.onChange([...props.value, newItem]);
        }
        setNewItem('');
    };
    const removeItem = (toRemove) => {
        console.log(toRemove)
    };

    return (
        <div className='multivalue-input-group'>
            <div className='input-button-wrapper'>
                <Input
                    label={props.label}
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                />
                <button
                    type='button'
                    className='nemo-button'
                    onClick={addItem}
                >add
                </button>
            </div>
            <ul>
                {props.value.map(item => {
                    return <li key={item}>
                        <span>{item}</span>
                        <button type='button' id={item} onClick={() => removeItem(item)}>&times;</button>
                    </li>;
                })}
            </ul>
        </div>
    );
};

export default Multivalue;