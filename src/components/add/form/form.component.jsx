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
const Form = (props) => {
    console.log('props', props);
    const userContext = useContext(UserContext);
    const oldItem = props?.item || null;
    console.log("old Item: ", oldItem);
    const addItem = useAddItem({ name: oldItem?.name || null, ingredients: oldItem?.ingredients || null });
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
                value={oldItem?.description}
            />

            <Input
                name="price"
                label="Price"
                type="number"
                value={oldItem?.price}
                required
            />

            <Select required name="category" label='Category' value={oldItem?.category}>
                {CATEGORIES.map((item) => {
                    return <option key={item} value={item}>{item}</option>;
                })}
            </Select>

            <Multivalue
                label="Ingredients"
                name="ingredients"
                value={addItem.ingredients.value}
                onChange={(newIngredients) => addItem.ingredients.setValue(newIngredients)}
            />
            <Input name="image" label='Image link' value={oldItem?.imageURL} />

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