import { useState } from 'react';
import './form.css';
import Input from '../common/input/input.component';
import Button from '../common/button/button.component';
import Textarea from '../common/textarea/textarea.component';
import Select from '../common/select/select.component';

const Form = (props) => {
  const [name, setName] = useState(`Omar`)

  const submitHandler = e => {
    e.preventDefault();
    console.debug(e.target.name.value)
  }


  const changeName = (value) => {
    const isAllowed = (char) => {
      console.log(`char: ${char}`)
      if (char === ' ') {
      }
      const allowed = [['a', 'z'], ['A', 'Z'], [' ', ' ']]
      for (let i = 0; i < allowed.length; i++) {
        if (char >= allowed[i][0] && char <= allowed[i][1]) {
          return true;
        }
      }
      return false;
    }
    if (value.target.value.length > 20) alert(`You can't enter more than 20 characters`)
    else if (isAllowed(value.nativeEvent.data)) setName(value.target.value.replace('find', 'fry'))
    else alert(`Denied character (${value.nativeEvent.data})`)
  }

  return (
    <form className='add-form' onSubmit={submitHandler}>
      <div style={{marginTop: 20}}>
        <Input label="Name" value={name} onChange={changeName} required></Input>
        <Textarea label="Description" ></Textarea>
        <Input label="Price" type="number" value={0} required></Input>
        <Select items={[`Fish`, `Shisha`, `Drink`]}></Select>
        <Button name="SUBMIT" type="submit"></Button>
      </div>
    </form>
  );
};

export default Form;