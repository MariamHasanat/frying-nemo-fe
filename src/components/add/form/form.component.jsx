import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/multivalue-input/multivalue-input/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './form.css';
import CATEGORIES from '../../../data/constants';
import { useContext , useEffect } from 'react';
import { UserContext } from '../../../components/providers/user-provider.component';
import { useAddItem } from '../../../hooks/add-item.hook';

const Form = (props) => {
  
  const userContext = useContext(UserContext);
  const add = useAddItem(props.id) ;
  useEffect (()=> {
    console.log(props);
    if (props?.id)
      add.setUpValues();
  } , [])
  // const CATEGORIES = ["Salads", "Main Dishes", "Drinks", "Sweets"];
  return (
    <form className='addForm' onSubmit={add.submit} action='/view'>
      {console.log(add.name.value)}
      <Input
        className='input-group'
        label="Name"
        value={add.name.value}
        required
        onChange={add.name.onChange}
      />
      <Textarea
        name='description'
        label="description"
        className='textarea-group'
        value = {add.description.value}
        onChange = {add.description.onChange}
      />
      <Input label='Enter image link' type="text" name="imageUrl" />
      <Input
        className='input-group'
        type="number"
        label="Price"
        name='price'
        required
        min={0}
        value= {add.price.value}
        onChange= {add.price.onChange}
      />
      {/* using array mapping */}
      <Select label='Select' name='category' value={add.category.value} onChange={add.category.onChange}>
        {CATEGORIES.map(item =>
          <option key={item} value={item}>{item}</option>
        )}
        {/* key must be mintions */}
      </Select>
      <MultivalueInput
        label='Ingredients' name='ingredients'
        onChange={item => add.ingredients.onChange(item)}
        value={add.ingredients.value}
      />
      <div className='addFormButtons'>
        <button
          type='submit'
          className='formComp nemo-button'
          disabled={userContext.user?.role !== 'ADMIN'}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default Form;
