import './form.css';
import React, { useContext, useEffect } from 'react';
import { CATEGORIES } from '../../../data/constants';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/mutivalue-input/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import { UserContext } from '../../providers/user-provider.component';
import useAddItem from '../../../hooks/menu/add-item.hook';



const Form = (props) => {

  const userContext = useContext(UserContext);
  const addItem = useAddItem(userContext.user?._id && props._id);

  useEffect(() => {
    console.log(props);
    if (props?._id)
      addItem.setUpValues();
  }, []);


  return (
    <form className="add-form" onSubmit={addItem.submit}>
      <div style={{ marginTop: 20 }}>

        {console.log(addItem.name.value)}

        <Input
          label="Name"
          value={addItem.name.value}
          onChange={addItem.name.onChange}
          required
        />

        <Textarea
          name='description'
          label=" Description"
          value={addItem.description.value}
          onChange={addItem.description.onChange}
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
          value={addItem.price.value}
          onChange={addItem.price.onChange}
        />


        <Select name='category' label="Category" required value={addItem.category.value} onChange={addItem.category.onChange}>
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