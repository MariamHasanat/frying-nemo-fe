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
    const [currentItem, setCurrentItem] = useState({ ...props.currentItem });
    useEffect(() => {
        console.log('currentItem', currentItem);
        console.log(props); setCurrentItem({ ...currentItem, ...props.currentItem });
    }, [props]);

    const userContext = useContext(UserContext);
    const updateItem = useUpdateItem(params.id);

    return (
        <form onSubmit={updateItem.submit} className="styled-form">

            <Input
                name="name"
                label="Name"
                value={updateItem.name.value || currentItem.name}
                onChange={() => updateItem.name.onChange}
                required
            />
            <Textarea
                name="description"
                label='Description'
                value={updateItem.description.value}
                onchange={(desc) => updateItem.description.onChange('description', desc)}
            />

            <Input
                name="price"
                label="Price"
                type="number"
                value={updateItem.price.value || currentItem.price}
                onchange={(price) => updateItem.price.onChange('price', price)}
                required
            />

            <Select
                required
                name="category"
                label='Category'
                value={updateItem.category.value || currentItem.category}
                onchange={(category) => updateItem.category.onChange('category', category)}
                >
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
            <Input name="image" 
            label='Image link' 
            value={updateItem.imageURL.value || currentItem.imageURL}
                onchange={(imageURL) => updateItem.imageURL.onChange('imageURL', imageURL)}
            />

            <div>
                <button
                    className='nemo-button add-form-button'
                    disabled={userContext.user?.role !== 'ADMIN'}
                >
                    Update
                </button>

            </div>
        </form >
    );
};

export default EditForm;