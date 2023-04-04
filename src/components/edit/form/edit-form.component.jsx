import './edit-form.css';
import React from 'react';
import Input from '../../common/input/input.component';
import Textarea from '../../common/textarea/textarea.component';
import SelectArea from '../../common/selectarea/selectarea.component';
import MultivalueInput from '../../common/multivalue-input/multivalueInput';
import { CATEGORIES } from '../../../data/constants';
import { useNavigate, useParams } from 'react-router-dom';
import useEditItem from '../../../hooks/edit/edit-item.hook';

const EditForm = () => {
    const param = useParams();
    const { item, submitHandler, setItem } = useEditItem(param.id);
    console.log(item);
    const navigate = useNavigate();
    return (
        <div>
            <form className='form' onSubmit={e => {
                e.preventDefault();
                submitHandler(e);
            }}>
                <Input
                    name='Name'
                    label='Name'
                    type={'Text'}
                    defaultValue={item.name}
                    onChange={(e) => {
                        setItem(oldItem => ({ ...oldItem, item: { ...item, name: e.target.value } }));
                    }}
                    required
                />
                <Textarea
                    label='Description'
                    name={'description'}
                    defaultValue={item.description}
                    onChange={(e) => {
                        setItem(oldItem => ({ ...oldItem, item: { ...item, description: e.target.value } }));
                    }}
                />
                <Input
                    label="Image"
                    name="image"
                    required
                    defaultValue={item.image}
                    onChange={(e) => {
                        setItem(oldItem => ({ ...oldItem, item: { ...item, image: e.target.value } }));
                    }}
                />
                <Input
                    label='Price'
                    name='price'
                    type={'number'}
                    defaultValue={item.price}
                    min={0}
                    required
                    onChange={(e) => {
                        setItem(oldItem => ({ ...oldItem, item: { ...item, price: Number(e.target.value) } }));
                    }}
                />
                <SelectArea label='Categories' name={'category'} required
                    onChange={(e) => {
                        setItem(oldItem => ({ ...oldItem, item: { ...item, category: e.target.value } }));
                    }}
                >
                    {
                        CATEGORIES.map((item) => {
                            return <option key={item} value={item}>{item}</option>;
                        })
                    }
                </SelectArea>
                <MultivalueInput
                    label={'Ingredients'}
                    value={item.ingredients}
                    name={'ingredients'}
                    onChange={(newItem) => {
                        setItem(oldItem => ({ ...oldItem, item: { ...item, ingredients: newItem } }));
                    }}
                />
                <div className='sub'>
                    <input
                        type="submit"
                        className='nemo-button'
                        value={'Save'}
                    />
                </div>
                <div className='sub'>
                    <button
                        className='nemo-button'
                        onClick={() => navigate('/view', { replace: true })}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div >
    );

};





export default EditForm;