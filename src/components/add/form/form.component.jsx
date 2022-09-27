import { useState } from 'react';
import './form.css';

const Form = (props) => {



  const [name, SetName] = useState('add item')

  const sumbitHandler = e => {

   const target=e.target;
   console.debug(target);

}

  return (
    <form className='item-page' onSubmit={sumbitHandler}>
      <input type='text' name="name" placeholder="new item" value={name} onChange={e=>SetName(e.target.name)} ></input>
      <br />
<button type='sumbit'>Create</button>
    </form>
  );
};

export default Form;