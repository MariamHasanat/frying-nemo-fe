import { useContext, useEffect, useState } from 'react';
import Select from '../../../common/Select/Select';
import Textarea from '../../../common/textarea/textarea';
import Input from '../../../common/input/input';
import './update.css';
import MultivalueInput from '../../../common/multivalue-input/multivalue-input.component';
import Image from '../../../common/image/Image';
import { UserContext } from '../../../App';
import useAddItem from "../../../hooks/menu/add-item-hook";
import { getByTestId } from '@testing-library/react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getSingleItem } from '../../../services/items';
import Spinner from '../../../components/core/spinner/Spinner';
import useUpdateItem from '../../../hooks/menu/update-item-hook';



/**
 * 
 * @param {React.ChangeEvent<HTMLInputElement>} e 
 */
const UpdateForm =   (props) => {

  let [item, setitem] = useState([])
  const [loading, setLoading] = useState(true);
  const nav=useNavigate()
  const param=useParams()
  const category = ["Fish", "Meat", "Hooka", "Salads", "Sandwich", "Appetizers", "Ice cream", "Drinks", "Main Dishes"];
  useEffect(() => {
    singleItem();
  }, []);

  const singleItem = async() => {
    setLoading(true);
    const item=await getSingleItem(param.id)
      setitem(item);
    setLoading(false);
  }
  const UpdateItem = useUpdateItem(item);
  

  return (
    <div>
    {loading? <Spinner/>:
    <form className='item-page' onSubmit={UpdateItem.submit}>
      <br />
      <div className='div1'>
        <Input
          label="Name "
          defaultValue={item.name}
          onChange={UpdateItem.name.onChange}
          required

        />
        <br />
        <Input
          label="Price"
          type='number'
          defaultValue={item.price}
          name='price'
          required

        />
        <br></br>
        <Image defaultValue={item.imageUrl} required name="image" label="Image" onSubmit={e => { console.log(e.target.value); }}>
        </Image>


        <br />
        <Textarea
        defaultValue={item.description}
          name='description'
          label='Description' />
        <br></br>
        <Select name='category' label='Category' defaultValue={item.category}  required>
          {category.map(item => {
            return <option value={item} key={item}>{item}</option>;

          })}
        </Select>


        <MultivalueInput
          label="Ingredients"
          value={UpdateItem.ingredients.value}
          onChange={newIngredients => UpdateItem.ingredients.setIngredients(newIngredients)}

        />

        <button className='point' type='sumbit'  >updateS</button>
      </div>
    </form>
}
        </div>
  );
        
};

export default UpdateForm;