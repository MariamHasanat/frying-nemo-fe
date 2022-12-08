

import React, { useContext } from 'react';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/multivalueinput/multi-value-input';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './form.css';
import { CATEGORIES } from '../../../data/constant';
import { UserContext } from '../../providers/user-provider.component';
import useAddItem from '../../../Hooks/menu/add-item.hook';
const Form = (props) => {
  const userContext = useContext(UserContext);

  const addItem = useAddItem();
  return (
    <form className="addForm" onSubmit={addItem.submit} >
      <Input
        label="Name"
        value={addItem.name.value}
        onChange={addItem.name.onChange}
        required
      />
      <Textarea
        label="Description"
        name='Description'
      />
      <Input
        label="Image"
        name="image"

      />

      <Input
        label="Price"
        name='Price'
        type="number"
        min={0}
        required
      />
      <Select
        label="Category"
        name='category'
        required>
        {CATEGORIES.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select>

      <MultivalueInput

        label="Ingredients"
        name="Ingredients"
        value={addItem.Ingredients.value}
        onChange={newIngredients => addItem.Ingredients.setValue(newIngredients)}
      />

      <div className="addFormButtons">
        <button
          className="nemo-button"
          type="submit"
          disabled={userContext.user?.role !== 'ADMIN'}
        >
          Create
        </button>

      </div>

    </form>
  );
};

export default Form;