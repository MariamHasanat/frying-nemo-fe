import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from '../../services/items';

const useAddItem = (userId) => {

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  /**
   * Handler fn for the form onSubmit event .
   * @param {React.FormEvent<HTMLFormElement>}e Event object.
   */
  const submitHandler = async (e) => {
    e.preventDefault();

    const description = e.target.description.value;
    const imageUrl = e.target.imageUrl.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;


    const menuItem = {
      id: Date.now(),
      name: name,
      description: description,
      imageUrl,
      price: price,
      category: category,
      ingredients: ingredients,
      addedBy: userId
    };


    const res = await createItem(menuItem);
    if (res) {
      alert("Item added sucessfully!");
      navigate('/view');
    } else {
      alert("Error adding the item !");
    }
  };


  /**
 * Handles on change event on the name field.
 * @param {React.ChangeEvent<HTMLInputElement>} e on change event object . 
 */
  const onNameChange = (e) => {

    let value = e.target.value;

    if (value.includes('.')) {

      alert('. character is not allowed !');
      value = value.replace('.', ' ');
    }

    if (/find/ig.test(value)) {

      alert('find word is not allowed !');
      value = value.replace('/find/ig', 'fry ');
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
      setIngredient: setIngredients
    },
    submit: submitHandler

  };
};


export default useAddItem;