import { useState } from 'react';
import Input from '../input/input';
import './multiinput.css';

const Multiinput = props => {
  const [newItemvalue, setItemvalue] = useState('');

  const addItem = () => {
    if (newItemvalue.trim().length > 0 && !props.value.includes(newItemvalue)) {
      const valueAfterAddition = [...props.value, newItemvalue];
      props.onChange(valueAfterAddition);
      setItemvalue('');
    }
  };
  return (
    <div className='multivalue'>
      <div className='controls'>
        <Input
          label={props.label}
          value={newItemvalue}
          onChange={e => setItemvalue(e.target.value)}
        />

        <button
          className='nemo'
          type='button'
          onClick={addItem}
        >
          Add
        </button>
      </div>
      {
        props.value.length > 0 &&(
          <ul>
            {
              props.value.map(item=>{
                return(
                  <li key ={item}>
                    <span>{item}</span>
                    <button 
                    type='button'
                   onClick={()=>{
                    const valueAfterRemoval = props.value.filter(element => element !== item);
                      props.onChange(valueAfterRemoval);
                   }}
                   >&times;</button>
                  </li>
                );
              })
            }
          </ul>
        )
      }
    </div>
  );
};
export default Multiinput;