import { useState } from "react";
import { useNavigate } from "react-router";
import { createItem } from "../services/items";

const useAddItem = () => {
  const [name, setName] = useState("abd");
  const [ingredients, setNewIngredients] = useState([]);
  const navigate = useNavigate();

  function onNameChange(e) {
    let value = e.target.value;
    if (value === "find") {
      value = "fry";
    }
    setName(value);
  }
  /**
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const submitHandler = async (e) => {
    e.preventDefault();
    const description = e.target.description.value;
    const category = e.target.category.value;
    const price = Number(e.target.price.value);
    const imageUrl = e.target.image.value;

    const menuItem = {
      id: Date.now(),
      name: name,
      price: price,
      description: description,
      category: category,
      ingredients: ingredients,
      image: imageUrl,
    };

    const result = await createItem(menuItem);
    if (result) {
      navigate("/view");
    }
    else {
      alert("ERROR in adding item");
    }

  };

  return {

    name: {
      value: name,
      onChange: onNameChange
    },

    ingredients: {
      value: ingredients,
      setIngredients: setNewIngredients
    },

    submitHandler
  };
};

export default useAddItem;