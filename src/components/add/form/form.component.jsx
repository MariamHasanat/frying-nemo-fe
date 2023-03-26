import { useContext } from 'react';
import useAddItem from '../../../hooks/Add_item.hook';
import Input from '../../common/input/input';
import Multiinput from '../../common/maltiinput-value/multiinput';
import Select from '../../common/select/select';
import Textarea from '../../common/textarea/textarea.component';
import { UserContext } from '../../provider/provider';
import Withborder from '../../withborder/withborder';
import { CATEGORIES } from './data/constant';

import './form.css';
const Form = (props) => {
  const userContext = useContext(UserContext);
  const addItem = useAddItem();

  return (
    <form className='form' onSubmit={addItem.submit}>
      <div className='input'>
        <Withborder>
          <Input
            label='name'
            value={addItem.name.value}
            onChange={addItem.name.onChange}
            required
          />
        </Withborder>
        <Textarea
          label="Description"
          name='description'
        />
        <Input
          label="Image"
          name="imageUrl"
          required
        />
        <Input
          label="Price"
          name='price'
          type="number"
          min={0}
          required
        />
        <Select
          label="The Chioce"
          name='category'
          required
        >
          {CATEGORIES.map(item => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </Select>
        <Multiinput
          label="Ingradaint"
          value={addItem.ingredients.value}
          onChange={newIngredients => addItem.ingredients.setIngredients(newIngredients)}
        />


      </div>
      <button
        type="submit"
        className="nemo"
        disabled={userContext.user?.role !== 'ADMIN'}
      >Create</button>
    </form>
  );
};
export default Form;

