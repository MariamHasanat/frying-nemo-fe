import { useState } from 'react';
import './form.css';

const Form = (props) => {
  const [name , setName] = useState ('Raghad') ;

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e   //Event object
   */
   const handle = e => {
    e.preventDefault() ;
    console.debug (name) ;
   }
  return (
    <form>
      <input type="text" 
      name =  'name' 
      placeholder='name' 
      value = {name} 
      onChange = {e => setName (e.target.value)}
      />

      <div><button type='submit'  
      onClick={handle}> Create</button></div>
    </form>
  );
};

export default Form;