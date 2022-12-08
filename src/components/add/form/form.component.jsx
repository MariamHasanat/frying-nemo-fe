import { useState } from 'react';
import Textarea from '../../textarea/textarea/textarea.component';
import Input from '../../../user-work/input/input.component.jsx';
import './form.css';
import Select from '../../../user-work/select/select.component';
import MultivalueInput from '../../../user-work/multivalue-input/multivalue-input.component';
import { Navigate, useNavigate } from 'react-router-dom';
import CATEGORIES from '../../data/categories';
import { useContext } from 'react';
import { UserContext } from '../../providers/provider.component';
import { createItem } from '../../../pages/view-item/item';
import { useAddItem } from '../../hooks/add-item.hook';

const Form = () => {
  const user = useContext(UserContext);
  const addItem = useAddItem();
  
  return (
    <form className="addForm" onSubmit={addItem.submitHandler} >
      <div style={{ marginTop: 20 }}>
        <Input
          label="Name"
          value={addItem.name}
          onChange={addItem.onNameChange}
          required
        />
        <Input
        label="Image"
        name="image"
        required
      />
        <Textarea
          name='description'
          label="Description"
        />
        <Input
          name='price'
          label="Price"
          required
        />
        <Select name='category' label='category' required>
          {CATEGORIES.map(item => {
            return <option key={addItem.item} value={addItem.item}>{addItem.item}</option>;
          })}
        </Select>
        <MultivalueInput
          label='Ingredients'
          value={addItem.ingredients}
          onChange={newIngredients => addItem.setIngredients(newIngredients)}
        />
         <button
          className="nemo-button"
          type="submit"
          disabled={user.user?.role !== 'ADMIN'}
        >
          Create
        </button>

      </div>
    </form>
  );
};

export default Form;
