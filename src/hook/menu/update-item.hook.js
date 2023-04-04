import { useState } from 'react';
import { updateItem } from '../../data/items';

const useEditItem = (item) => {
  const [name, setName] = useState(item.name);
  const [ingredients, setIngredients] = useState(item.ingredients || []);
  const [imageUrl, setImageUrl] = useState(item.imageUrl);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category);

  /**
 * Handler function for the form onSubmit event.
 * @param {React.FormEvent<HTMLFormElement>} e Event object.
 */
  const UpdateItem = async (e) => {
    e.preventDefault();
    const menuItem = {
      _id:item._id,
      name: name,
      imageUrl: imageUrl,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients,
    };

    return updateItem(menuItem).then(item => {
    }).catch(error => {
      alert("Error updating the item");
      console.log(error);
    });
  };

  /**
   * Handles on change events on the name field.
   * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
   */
  const onNameChange = e => {
    let value = e.target.value;
    setName(value);
  };
  const onImageUrl = e =>{
    let value = e.target.value;
    setImageUrl(value);
  }
  const onDescription = e => {
    let value = e.target.value;
    setDescription(value);
  }
  const onPrice = e => {
    let value = e.target.value;
    setPrice(value);
  }
  const onCategory = e => {
    let value = e.target.value;
    setCategory(value);
  }

  return {
    name: {
      value: name,
      onChange: onNameChange
    },
    ingredients: {
      value: ingredients,
      setValue: setIngredients
    },
    category:{
      value: category,
      onChange: onCategory
    },
    price: {
      value: price,
      onChange: onPrice
    },
    imageUrl: {
      value: imageUrl,
      onChange: onImageUrl
    },
    description: {
      value: description,
      onChange: onDescription
    },
    update: UpdateItem
  };
};

export default useEditItem;
