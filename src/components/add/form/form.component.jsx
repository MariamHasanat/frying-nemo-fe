import MultivalueInput from '../../../common/multivalue-input/multivalue-input.component';
import Textarea from '../../../common/textarea/textarea.component';
import Input from '../../../common/input/input.component';
import { UserContext } from './provider/UserProvider';
import { CATEGORIES } from '../../../data/category';
import Select from '../../../common/Select/Select';
import { useContext } from 'react';
import './form.css';
import useAddItem from '../../../Hooks/menu/add-item.hook';


const Form = (props) => {

  const userContext = useContext(UserContext);
  const addItem = useAddItem();
  
  return (
    <form className='add-form' onSubmit={addItem.handler}>
      <div style={{ margintop: 20 }}>
        <Input
         
          label="Name"
          value={addItem.name.value}
          onChange={addItem.name.onChange}
          required
        />
        <Input
          name="price"
          label="Price"
          type="number"
          min={0}
          required
        />
        <Input
          label="Image"
          name="image"
          required
        />
        <Textarea
          name="description"
          label="Description"
        />
        <Select
          name="category"
          label="Category"
          required>
          {CATEGORIES.map(item => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </Select>
        <MultivalueInput
          label="Ingrediants"
          value={addItem.ingredients.value}
          onChange={newIngredients => addItem.ingredients.setIngredients(newIngredients)}
        />
        <div className="create-btn">
          <button
            className="nemo-button"
            type="submit"
            disabled={userContext.user?.role !== 'ADMIN'}
          >Creat</button>
        </div>
      </div>
    </form>
  );
};

export default Form;