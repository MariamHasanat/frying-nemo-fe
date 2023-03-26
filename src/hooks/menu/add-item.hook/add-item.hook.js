import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAddItem = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  /**
 * Handler function for the form onSubmit event.
 * @param {React.FormEvent<HTMLFormElement>} e Event object.
 */
  const submitHandler = e => {
    e.preventDefault();

    const description = e.target.description.value;
    const imageUrl = e.target.imageUrl.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;

    const menuItem = {
      id: Date.now(),
      name: name,
      imageUrl,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };

    const itemsJson = localStorage.getItem('menuItems');
    const items = JSON.parse(itemsJson) || [];

    items.push(menuItem);

    localStorage.setItem('menuItems', JSON.stringify(items));

    navigate('/view');
  };

  /**
 * Handles on change events on the name field.
 * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
 */
  const onNameChange = (e) => {
    let value = e.target.value;

    if (value.includes('.')) {
      alert('. character is not allowed');
      value = value.replace('.', '');
    }
//this iis the regex which qusai said about
    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, 'fry');
    }

    setName(value);
  };

  return {

    name: {
      value: name,
      onChange: onNameChange
    },
    ingredients: {
      value: ingredients,
      setValue: setIngredients
    },
    submit: submitHandler
  };
};

export default useAddItem;