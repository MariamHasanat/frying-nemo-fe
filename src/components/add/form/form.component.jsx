import { useState } from 'react';
import './form.css';
import Input from '../../../common/input/input.component';
import Textarea from '../../../common/textarea/textarea.component';
import Select from '../../../common/select/select.component';
import MultivalueInput from '../../../common/Multivalue-input/multivalue-input.component';

const Form = (props) => {
  const [name, setName] = useState('Nadeen');
  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e 
   */
  const SubmitHandel = e => {
    e.preventDefult();

  };
  const onNameChange = e => {
    let value = e.target.value;

    if (value.includes('find')) {
      value = value.replace(/find/ig, 'fry');
    }
    setName(value);

  };
  const categories =[
      "Fish",
      "Drink",
      "Salade",
      "Sandwiches",
      "Ice Cream",
  ];
  return (
    <form className='add-form' onSubmit={SubmitHandel}>
      <div style={{ marginTop: 20 }}>

        <Input
          label="Name"
          placeholder='name'
          value={name}
          onChange={onNameChange}
          required
        />
        <Textarea
          label="Description"
        />
        <Input
          type='number'
          label='price'
          min={0}
          required
        /><MultivalueInput
        label='INGREDIENTS'
        type="text"
        ></MultivalueInput>
        <Select label='Category'>
          {categories.map(item => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </Select>

       
      </div>   
      <div>
          
        <button type='submit' className='submit'>Create</button>
      </div> 
    </form>
  );
};

export default Form;