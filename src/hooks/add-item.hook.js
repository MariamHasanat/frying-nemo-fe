import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../services/view/fetch-items.service";

const useAddItem = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  /*
   * calls JSDoc
   * @param {React.ChangeEvent<HTMLInputElement>} e   //Event object
   */
  const handle = async e => {
    e.preventDefault();
    console.log('Form Submitted');
    const price = e.target.price.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const imageUrl = e.target.imageUrl.value;

    const menueItem = {
      id: Date.now(),
      name: name,
      price: Number(price),
      description: description,
      category: category,
      ingredients: ingredients,
      imageUrl: imageUrl
    };

    const response = await createItem(menueItem);
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

  return {
    name: {
      value: name,
      onChange: nameChange
    },
    ingredients: {
      value: ingredients,
      onChange: setIngredients
    },
    submit: handle
  };
};
export { useAddItem };