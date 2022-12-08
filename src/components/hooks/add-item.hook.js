import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../pages/view-item/item";

const useAddItem = () => {
  const [name, setName] = useState('Huda');
  const [ingredients, setIngredients] = useState([]);
  const Navigate = useNavigate();

  /**
 * Handler function for the form onSubmit event.
 * @param {React.FormEvent<HTMLFormElement>} e Event object.
 */
  const submitHandler = async e => {
    e.preventDefault();

    const description = e.target.description.value;
    const image = e.target.image.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;

    const menuItem = {
      id: Date.now(),
      name: name,
      image: image,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };

    const res = await createItem(menuItem);
    if (res) {
      alert('you add an item successfully');
      Navigate('/view');
    }
    else {
      alert('adding item failed');
    }

    console.log('form submetted', menuItem);
    const JsonItem = localStorage.getItem('menuItem');
    console.log(JsonItem);
    const items = JSON.parse(JsonItem) || [];
    items.push(menuItem);
    localStorage.setItem('menuItem', JSON.stringify(items));

    Navigate('/view');

    /**
     * @type {HTMLFormElement}
     */
    const target = e.target;
    console.debug(target.ATTRIBUTE_NODE);
  };

  const onNameChange = e => {
    let value = e.target.value;
    if (value.includes('find')) {
      value = value.replace('find', 'fry');
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
export {
  useAddItem
};