import { useState } from 'react';
import Input from '../../../input/input.component';
import './form.css';


const Form = (props) => {
 
  
  const [name, SetName] = useState(' Add item');
 
  const sumbitHandler = e => {

    const target = e.target;
    console.debug(target);

  };

  const onChange1 = e =>{
     
      let value = e.target.value;
      if (/find/ig.test(value)) {
        value = value.replace(/find/ig, "fry");

      }
      if (value.length > 20) {
        alert("more than 20 char");
        value = "";
      }
      SetName(value);
    };
  

  return (
    <form className='item-page' onSubmit={sumbitHandler}>
      <br />
      <div className='div1'>
        <Input
          label="Name"
          value={name}
          onChange={onChange1}
        />

        <button type='sumbit'>Create</button>
      </div>
    </form>
  );
};

export default Form;