import './form.css';
import React, { useContext } from 'react';
import Input from '../../common/input/input.component';
import Textarea from '../../common/textarea/textarea.component';
import SelectArea from '../../common/selectarea/selectarea.component';
import MultivalueInput from '../../common/multivalue-input/multivalueInput';
import { CATEGORIES } from '../../../data/constants';
import { UserContext } from '../../providers/user-provider.component';
import useAddItem from '../../../hooks/add/add-item.hook';

const Form = () => {
    const userContext = useContext(UserContext);
    const addItem = useAddItem();
      
    return (
        <div>
            <form className='form' onSubmit={e => {
                e.preventDefault();
                addItem.submitHandler(e);
            }}>
                <Input
                    name='Name'
                    label='Name'
                    type={'Text'}
                    value={addItem.name.value}
                    onChange={addItem.name.onchange}
                    required
                />
                <Textarea
                    label='Description'
                    name={'description'}
                />
                <Input
                    label="Image"
                    name="image"
                    required
                />
                <Input
                    label='Price'
                    name='price'
                    type={'number'}
                    min={0}
                    required
                />
                <SelectArea label='Categories' name={'category'} required>

                    {
                        CATEGORIES.map((item) => {
                            return <option key={item} value={item}>{item}</option>;
                        })
                    }
                </SelectArea>
                <MultivalueInput
                    label={'Ingredients'}
                    value={addItem.ingredients.value}
                    name={'ingredients'}
                    onChange={(newItem) => {
                        addItem.ingredients.setValue(newItem);
                    }}
                />
                <div className='sub'>
                    <input
                        type="submit"
                        className='nemo-button'
                        disabled={userContext.user?.role !== 'ADMIN'}
                    />
                </div>
            </form>
        </div >
    );

};





export default Form;