import { useContext, useState } from 'react';
import './form.css';
import Input from '../common/input/input.component';
import Button from '../common/button/button.component';
import Textarea from '../common/textarea/textarea.component';
import Select from '../common/select/select.component';
import MultivalueInput from '../common/multivalue-input/multivalue-input.component';
import { CATEGORIES } from '../../../data/constants';
import { UserContext } from '../../core/providers/user-provider.component';
import useAddItem from '../../../hooks/menu/add-item.hook.component';

const Form = () => {
  const { user } = useContext(UserContext);
  const {name, ingredients, submitHandler} = useAddItem();
  
  return (
    <form className='add-form' onSubmit={submitHandler.value}>
      <div className='inputs'>
        <Input name='name' label="Name" value={name.value} onChange={name.onChange} required></Input>
        <Textarea name='description' label="Description" ></Textarea>
        <Input name="price" label="Price" type="number" required></Input>
        <Input name="image" label="Image" type="text" required></Input>
        <Select name='category' items={CATEGORIES} required></Select>
        <MultivalueInput onChange={ingredients.onChange} name='ingredients' label='Ingredients' />
        <Button name="SUBMIT" type="submit"></Button>
      </div>
    </form>
  );
};

export default Form;