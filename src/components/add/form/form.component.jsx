import { useState } from 'react';
import Input from '../../../input/input.component';
import Textarea from '../../../textarea/textarea.component';
import Select from '../../common/select/select.component';
import './form.css';


/**
 * 
 * @param {React.ChangeEvent<HTMLInputElement>} e 
 */
const Form = (props) => {
 
  
  const [name, SetName] = useState('Add item');
 
  const submitHandler = e => {
e.preventDefault();
    const target = e.target;

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
  
const category =["Fish","Meat","Hooka","Salads","Sandwich","Appetizers","Ice cream","Drinks"]
;
  return (
    <form className='item-page' onSubmit={submitHandler}>
      <br />
      <div className='div1'>
        <Input
          label="Name "
          value={name}
          onChange={onChange1}
          required
        />
          <br></br>
        <Textarea label='Description'/>
  <br></br>
<Select label='Category' required>
  {category.map(item=>{
    return <option value={item} key={item}>{item}</option>;

  })}
</Select>


  
        <button type='sumbit'>Create</button>
      </div>
    </form>
  );
};

export default Form;