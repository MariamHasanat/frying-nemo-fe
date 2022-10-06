import { useState } from 'react';
import Input from '../../common/input/input.component';
import MultiValueInput from '../../common/multivalue-input/multi-value-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea/textarea.component';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState('ali');

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */


 
     /**
      * Handles on change events on the name feild.
      * @param {React.ChangeEvent<HTMLInputElement>} e On change event object. 
      */


const categories=[
  "fish",
  "drink",
  "Mooka",
  "Chocolate",
  "Sheesha",
  "Sandowich",
  
]

  const submitHandler = e => {
    e.preventDefault();

    /**
     * @type {HTMLFormElement}
     */
    const target = e.target;
    console.debug(target.ATTRIBUTE_NODE);
    
  };
  const onNameChange = e =>{
       let value = e.target.value;
      if (value.includes('.')){
        alert("there a char in name");
      };
      if(value.includes("find")){
      value = value.replace('find','fry');
      }
      if ( value.length > 20){
        alert("plese edit that");
      };
      setName(value);
      // console.log(value);
  };


      
  return (
    <form className="add-form" onSubmit={submitHandler} >
      <div style={{ marginTop: 20 }}>
        <Input
        label = "Name"
        value={name}
        onChange = {onNameChange}
         required
        />
        <Textarea
        label = "Descreption"/>
        <Input
        label = "Price"
        type="number"
        min={0}
         required
        />
        <Select label='select from menu' required>
         return {categories.map((item) =>{
             return <option key={item} value={item}>{item}</option>;
         })}
        </Select>
        <MultiValueInput></MultiValueInput>
      </div>
        <button className='nemo-button' type="submit">Create</button>
      
    </form>
  );
};

export default Form;
