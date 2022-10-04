import { useState } from 'react';
import Input from '../../common/input/input.component';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState('ali');

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */


 
     /**
      * Handkles on change events on the name feild.
      * @param {React.ChangeEvent<HTMLInputElement>} e On change event object. 
      */




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
      </div>
        <button type="submit">Create</button>
      
    </form>
  );
};

export default Form;
