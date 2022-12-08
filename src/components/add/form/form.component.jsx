import React, { useState, useContext } from 'react';
import Input from '../../common/input/input';
import MySelect from '../../common/select/select';
import Textarea from '../../common/textarea/textarea/Tarea';
import MultivalueInput from '../../common/multi-value-input/multi-value-input';
import './form.css';
import { CATEGORIES } from '../../../data/data';
import { UserContext } from '../../../App';
import useAddItem from '../../Hooks/add-item.hook';

const Form = (props) => {
  const add = useAddItem();
  const userContext = useContext(UserContext);


  /**
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */




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


  return (
    <div className='add-wapper'>

      <form onSubmit={add.submit} >

        <h1>Add to the menu !</h1>
        <div className="row">

          <div className="colmn">
            <Input
              label="Name"
              value={add.name.value}
              onChange={add.name.onchange}
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
              value={add.ingrediant.value}
              onChange={newI => add.ingrediant.setValue(newI)}
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