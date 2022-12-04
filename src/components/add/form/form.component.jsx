import React, { useState, useContext } from 'react';
import Input from '../../common/input/input';
import MySelect from '../../common/select/select';
import Textarea from '../../common/textarea/textarea/Tarea';
import MultivalueInput from '../../common/multi-value-input/multi-value-input';
import './form.css';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../../data/data';
import { UserContext } from '../../../App';
import {creatItem} from '../../services/items'  


const Form = (props) => {
  const [name, setName] = useState('ayat');
  const [ingrediant, setIngrediant] = useState([]);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);


  /**
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */

  const submitHandeller = (e) => {
    e.preventDefault();
    /*
     * @type {HTMLFormElement} 
    */

    const description = e.target.description.value;
    const price = Number(e.target.price.value);
    const categories = e.target.categories.value;
    const image = e.target.image.value;

    const menuItem = {
      //or we can use random id 
      id: Date.now(),
      name: name,
      description: description,
      price: price,
      categories: categories,
      ingrediant: ingrediant,
      image,

    };


/** store item in the local storage before using API */
    // const itemsJson = localStorage.getItem('menuitems');
    // const items = JSON.parse(itemsJson) || [];
    // items.push(menuItem);
    // localStorage.setItem('menuitems', JSON.stringify(items));
    // console.table('menuitems', items);


    /** create item bu  using Fech API method POST */
    creatItem(menuItem);

    navigate('/view');


    ///to store complex object on local storage we need to convert it to json file using JSON.stringify (string representation )
    // use JSON.pars  convert JSON string   -> js object 



  };


  // const categories = [
  //   'Fish',
  //   'Drinks',
  //   'Hookah',
  //   'Salads',
  //   'Sandwiches',
  //   'Main Dish',
  //   'Appetizers',
  //   'Ice Cream'
  // ];
  const onNameChange = e => {
    let value = e.target.value;
    if (value.includes('.')) {
      alert("not allow char ");
    }

    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, 'fry');
    }
    setName(value);
    console.log('hi');

  };


  return (
    <div className='add-wapper'>

      <form onSubmit={submitHandeller} >

        <h1>Add to the menu !</h1>
        <div className="row">

          <div className="colmn">
            <Input
              label="Name"
              value={name}
              onChange={onNameChange}
              required
            />
            <Input
              label="Image"
              name="image"
            />


            <Textarea
              label="Decription"
              name='description'
            />
          </div>

          <div className="colmn">
            <MySelect
              name="categories"
              label='categories' required>
              {
                CATEGORIES.map(item => {

                  return <option value={item} key={item}>{item}</option>;
                })
              }
            </MySelect>

            <Input
              name="price"
              label="price"
              type="number"
              min={0}
              required
            />
            <MultivalueInput
              label="Ingradiant"
              value={ingrediant}
              onChange={newI => setIngrediant(newI)}
            />

          </div>
        </div>

        <div className="submit-form-btn">
          <button type='submit'
            className="nemo-button"
            disabled={
              userContext.user?.role !== 'ADMIN'
            }
          >create
          </button>
        </div>

      </form>
    </div>
  );
};

export default Form;