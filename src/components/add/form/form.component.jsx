import { useState } from 'react';
import Select from '../../../common/Select/Select';
import Textarea from '../../../common/textarea/textarea';
import Input from '../../../common/input/input';
import './form.css';
import MultivalueInput from '../../../common/multivalue-input/multivalue-input.component';




/**
 * 
 * @param {React.ChangeEvent<HTMLInputElement>} e 
 */
const Form = (props) => {

  const [name, SetName] = useState('Add item');
  const [ingredients, setIngredients] = useState([]);
  const submitHandler = e => {
    e.preventDefault();
    const description = e.target.description.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;

    const menuitem = {
     name:name, 
     description:description,
     price:price,
     category:category,
     ingredients:ingredients
    };

    console.log("from suited: ",menuitem)

  };

  const onChange1 = e => {

    let value = e.target.value;
    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, "fry");

    }
    if (value.length > 20) {
      alert("more than 20 char");
      value = "";
    }
    SetName(value);
  };

  const category = ["Fish", "Meat", "Hooka", "Salads", "Sandwich", "Appetizers", "Ice cream", "Drinks"]
    ;
  return (
    <form className='item-page' onSubmit={submitHandler}>
      <br />
      <div className='div1'>
        <Input
          label="Name "
          value={name}
          onChange={onChange1}
          required

        />
        <Input
          label="Price"
          type='number'
          name='price'
          required

        />
        <br></br>
        <Textarea
          name='description'
          label='Description' />
        <br></br>
        <Select  name='category' label='Category' required>
          {category.map(item => {
            return <option value={item} key={item}>{item}</option>;

          })}
        </Select>


        <MultivalueInput
          label="Ingredients"
          value={ingredients}
          onChange={newIngredients => setIngredients(newIngredients)}

        />

        <button type='sumbit'>Create</button>
      </div>
    </form>
  );
};

export default Form;