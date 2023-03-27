import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem, fetchItem, updateItem } from "../services/view/fetch-items.service";
/**
 * 
 * @param {string?} id 
 * @returns 
 */
const useAddItem = (id) => {
  const [item, setItem] = useState();
  const [name, setName] = useState(item?.name || '');
  const [ingredients, setIngredients] = useState(item?.ingredients || []);
  const [description, setDescription] = useState(item?.description || '');
  const [price, setPrice] = useState(item?.price || 0);
  const [category, setCategory] = useState(item?.category || '');
  const [imageUrl, setImateUrl] = useState(item?.imageUrl || '');
  const navigate = useNavigate();

  const updateOtherVAlues = tempItem => {
    try {
      console.log(tempItem);
      setName(tempItem.name);
      setPrice(tempItem.price);
      setImateUrl(tempItem.imageUrl);
      setCategory(tempItem.category);
      setDescription(tempItem.description);
      setIngredients(tempItem.ingredients);
    } catch (error) {
      console.log(error.message);
    }
  };

  /*
   * calls JSDoc
   * @param {React.ChangeEvent<HTMLInputElement>} e   //Event object
   */
  const handle = async e => {
    e.preventDefault();
    console.log('Form Submitted');
    setPrice(e.target.price.value);
    setDescription(e.target.description.value);
    setCategory(e.target.category.value);
    setImateUrl(e.target.imageUrl.value);

    const menueItem = {
      name: name,
      price: Number(price),
      description: description,
      category: category,
      ingredients: ingredients,
      imageUrl: imageUrl
    };

    const response = await (item ? updateItem(menueItem , id) : createItem(menueItem));
    if (response) {
      alert("item added successfully");
      navigate('/view');
    }
    else {
      alert('something went wrong , can\'t add the item');
    }
  };

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e 
   */
  const nameChange = e => {
    let val = e.target.value;
    if (/find/ig.test(val)) {
      alert('find not allowed to be included in the input !');
      val = val.replace(/find/ig, 'fry');
    }
    if (val.length > 20) {

      alert('character limit exceeded');
      val = val.substring(0, 20);
    }
    setName(val);
  };

  const priceChange = e => { setPrice(e.target.value); };

  const imageUrlChange = e => { setImateUrl(e.target.value); };
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
      onChange: nameChange
    },
    ingredients: {
      value: ingredients,
      onChange: setIngredients
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
    submit: handle,
    setUpValues: setUpValues
  };
};
export { useAddItem };