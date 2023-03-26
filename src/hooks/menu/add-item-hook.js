import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../services/items";

const useAddItem = () => {
  const navigate = useNavigate();
  const [name, SetName] = useState('Add item');
  const [ingredients, setIngredients] = useState([]);
  const submitHandler = async e => {
    e.preventDefault();

    const description = e.target.description.value;
    const imageUrl = e.target.image.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;

console.log(imageUrl)
    const menuItem = {
      id: Date.now(),
      name: name,
      imageUrl:imageUrl,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };

    const res = await createItem(menuItem);

    if (res) {
      alert("the send is successfully");
      navigate("/view");
    } else {
      alert("the send is Failed");
    }

  };

  const onChangeName = e => {

    let value = e.target.value;
    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, "fry");

    }
    if (value.length > 20) {
      alert("more than 20 char");
      value = "";
    }
    SetName(value);
  };
  return {
    name: {
      value: name,
      onChange: onChangeName
    },
    ingredients: {
      value: ingredients,
      setIngredients: setIngredients
    },
    submit: submitHandler
  };
};

export default useAddItem;



