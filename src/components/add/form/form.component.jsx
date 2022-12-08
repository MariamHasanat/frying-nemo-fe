import './form.css';
import Input from '../../../common/input/input.component';
import Textarea from '../../../common/textarea/textarea.component';
import Select from '../../../common/select/select.component';
import MultivalueInput from '../../../common/Multivalue-input/multivalue-input.component';
import React,{ useContext } from 'react';
import  { UserContext } from '../../provider/provider.component';
import useAddItem from '../../../hook/add-item.hook';
import { CATEGORY } from '../../../data/cons';

const Form = () => {
  const userContext=useContext(UserContext);
  const addItem = useAddItem();

  return (
    <form className='add-form' onSubmit={addItem.submit}>
      <Input
        label="Name"
        name='name'
        placeholder='name'
        value={addItem.name.value}
        onChange={addItem.name.onChange}
        required
      />
      <Input
        label="Image"
        name='image'
        required
      />
      <Textarea
        name='description'
        label="Description"
      />
      <Input
        type='number'
        name='price'
        label='price'
        min={0}
        required
      />
      <Select name='category' label='Category' required>
        {CATEGORY.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select>

      <MultivalueInput
        name='ingredients'
        label="Ingredients"
        value={addItem.ingredients.value}
        onChange={newIngredients =>addItem.ingredients.setValue(newIngredients)}
      />

      <div>
        <button type='submit' className='submit' disabled={userContext.user?.role !== 'ADMIN'} >Create</button>
      </div>
    </form>
  );
};

export default Form;