import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem, fetchItem, updateItem } from '../../services/items';


/**
 * 
 * @param {string?} id 
 * @returns 
 */
const useAddItem = (userId, id) => {

  const [item, setItem] = useState();
  const [name, setName] = useState(item?.name || '');
  const [ingredients, setIngredients] = useState(item?.ingredients || []);
  const [description, setDescription] = useState(item?.description || '');
  const [price, setPrice] = useState(item?.price || 0);
  const [category, setCategory] = useState(item?.category || '');
  const [imageUrl, setImageUrl] = useState(item?.imageUrl || '');
  const navigate = useNavigate();


  const updateOtherVAlues = tempItem => {
    try {
      console.log(tempItem);
      setName(tempItem.name);
      setPrice(tempItem.price);
      setImageUrl(tempItem.imageUrl);
      setCategory(tempItem.category);
      setDescription(tempItem.description);
      setIngredients(tempItem.ingredients);
    } catch (error) {
      console.log(error.message);
    }
  };


  /**
   * Handler fn for the form onSubmit event .
   * @param {React.FormEvent<HTMLFormElement>}e Event object.
   */
  const submitHandler = async (e) => {
    e.preventDefault();

    setDescription(e.target.description.value);
    setImageUrl(e.target.imageUrl.value);
    setPrice(Number(e.target.price.value));
    setCategory(e.target.category.value);


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


    const res = await (item ? updateItem(menuItem, id) : createItem(menuItem));
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

  const priceChange = e => { setPrice(e.target.value); };

  const imageUrlChange = e => { setImageUrl(e.target.value); };
  const descriptionChange = e => { setDescription(e.target.value); };
  const categoryChange = e => { setCategory(e.target.value); };

  const setUpValues = async () => {
    const tempItem = await fetchItem(id);
    setItem(tempItem);
    updateOtherVAlues(tempItem);
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
    price: {
      value: price,
      onChange: priceChange
    },
    category: {
      value: category,
      onChange: categoryChange
    },
    imageUrl: {
      value: imageUrl,
      onChange: imageUrlChange
    },
    description: {
      value: description,
      onChange: descriptionChange
    },
    submit: submitHandler,
    setUpValues: setUpValues

  };
};


export default useAddItem;