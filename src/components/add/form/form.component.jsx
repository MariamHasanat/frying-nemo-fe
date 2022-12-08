import { useContext } from 'react';
import Select from '../../../common/Select/Select';
import Textarea from '../../../common/textarea/textarea';
import Input from '../../../common/input/input';
import './form.css';
import MultivalueInput from '../../../common/multivalue-input/multivalue-input.component';
import Image from '../../../common/image/Image';
import { UserContext } from '../../../App';
import useAddItem from "../../../hooks/menu/add-item-hook";


/**
 * 
 * @param {React.ChangeEvent<HTMLInputElement>} e 
 */
const Form = (props) => {
  const userContext = useContext(UserContext);
  const addItem = useAddItem();
  const category = ["Fish", "Meat", "Hooka", "Salads", "Sandwich", "Appetizers", "Ice cream", "Drinks", "Main Dishes"];

  return (
    <form className='item-page' onSubmit={addItem.submit}>
      <br />
      <div className='div1'>
        <Input
          label="Name "
          value={addItem.name.value}
          onChange={addItem.name.onChange}
          required

        />
        <br />
        <Input
          label="Price"
          type='number'
          name='price'
          required

        />
        <br></br>
        <Image required name="image" label="Image" onSubmit={e => { console.log(e.target.value); }}>
        </Image>


        <br />
        <Textarea
          name='description'
          label='Description' />
        <br></br>
        <Select name='category' label='Category' required>
          {category.map(item => {
            return <option value={item} key={item}>{item}</option>;

          })}
        </Select>


        <MultivalueInput
          label="Ingredients"
          value={addItem.ingredients.value}
          onChange={newIngredients => addItem.ingredients.setIngredients(newIngredients)}

        />

        <button className='point' type='sumbit'>Create</button>
      </div>
    </form>
  );
};

export default Form;