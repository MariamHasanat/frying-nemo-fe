import Input from '../../common/input/input.component';
import Multivalue from '../../common/multivalue-input.component.jsx/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './form.css';
import '../../../common.css';
import { useContext } from 'react';
import { CATEGORIES } from '../../../data/constants';
import { UserContext } from '../../providers/user-provider.component';
import { useAddItem } from '../../../hooks/add-item.hook';
const Form = () => {
    const userContext = useContext(UserContext);
    const addItem = useAddItem();
    return (
        <form onSubmit={addItem.submit} className="styled-form">

            <Input
                name="name"
                label="Name"
                onChange={addItem.name.onChange}
                value={addItem.name.value}
                required
            />
            <Textarea
                name="description"
                label='Description'
            />

            <Input
                name="price"
                label="Price"
                type="number"
                required
            />

            <Select required name="category" label='Category'>
                {CATEGORIES.map((item) => {
                    return <option key={item} value={item}>{item}</option>;
                })}
            </Select>

            <Multivalue
                label="Ingredients"
                name="ingredients"
                // value={[2, 3, 4, 5]}
                value={addItem.ingredients.value}
                onChange={(newIngredients) => addItem.ingredients.setValue(newIngredients)}
            />
            <Input name="image" label='Image link' />

            <div>
                <button
                    className='nemo-button add-form-button'
                    disabled={userContext.user?.role !== 'ADMIN'}
                >
                    Create
                </button>

            </div>
        </form>
    );
};

export default Form;