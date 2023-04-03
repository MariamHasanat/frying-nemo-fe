import './form.css';
import React, { useContext } from 'react';
import { CATEGORIES } from '../../../data/constants';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/mutivalue-input/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import { UserContext } from '../../providers/user-provider.component';
import useAddItem from '../../../hooks/menu/add-item.hook';



const Form = () => {

  const userContext = useContext(UserContext);
  const addItem = useAddItem(userContext.user?._id);



  return (
    <form className="add-form" onSubmit={addItem.submit}>
      <div style={{ marginTop: 20 }}>

        <Input
          label="Name"
          value={addItem.name.value}
          onChange={addItem.name.onChange}
          required
        />

        <Textarea
          name='description'
          label=" Description"
        />

        <Input
          name='imageUrl'
          label="Image"
          required
        />

        <Input
          name='price'
          label="Price"
          type="number"
          min={0}
          required
        />


        <Select name='category' label="Category" required>
          {CATEGORIES.map(item => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </Select>

        <MultivalueInput
          label="Ingredients"
          value={addItem.ingredients.value}
          onChange={newIngredients => addItem.ingredients.setIngredient(newIngredients)}
        />

        <div><button type="submit" disabled={userContext.user?.role !== 'ADMIN'}>Create </button></div>


      </div>

    </form >
  );
};

export default Form;