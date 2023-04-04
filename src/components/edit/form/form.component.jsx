import Input from '../../common/input/input.component';
import Multivalue from '../../common/multivalue-input.component.jsx/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './edit-form.css';
import '../../../common.css';
import { useContext, useEffect, useState } from 'react';
import { CATEGORIES } from '../../../data/constants';
import { UserContext } from '../../providers/user-provider.component';
import { useUpdateItem } from '../../../hooks/edit-item.hook';
import { useParams } from 'react-router-dom';

const EditForm = (props) => {
    const params = useParams();
    const [category, setCategory] = useState(CATEGORIES[0]);
    useEffect(() => {
        console.log(props); setCategory(props.currentItem?.category);
    }, [props]);

    const userContext = useContext(UserContext);
    const updateItem = useUpdateItem(params.id);

    return (
        <form onSubmit={updateItem.submit} className="styled-form">

            <Input
                name="name"
                label="Name"
                onChange={updateItem.name.onChange}
                value={updateItem.name.value || props.currentItem?.name}
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

            <Select
                required
                name="category"
                label='Category'
                value={category}
                onChange={(cat) => setCategory(cat)}>
                {CATEGORIES.map((item) => {
                    return <option key={item} value={item}>{item}</option>;
                })}
            </Select>

            <Multivalue
                label="Ingredients"
                name="ingredients"
                value={updateItem.ingredients.value || props.currentItem?.ingredients}
                onChange={(newIngredients) => updateItem.ingredients.setValue(newIngredients)}
            />
            <Input name="image" label='Image link' />

            <div>
                <button
                    className='nemo-button add-form-button'
                    disabled={userContext.user?.role !== 'ADMIN'}
                >
                    Update
                </button>

            </div>
        </form>
    );
};

export default EditForm;