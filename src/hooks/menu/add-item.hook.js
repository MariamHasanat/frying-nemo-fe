import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../services/items";

const useAddItem = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  /**
 *
 * @param {React.FormEvent<HTMLFormElement>} e Event Object.
 */
  const submitHandler = async (e) => {
    // this function handling the form
    e.preventDefault(); // don't refresh and don't take me to another page

    // e.target == Form
    const description = e.target.description.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const category = e.target.category.value;

    // object
    const menuItems = {
      id: Date.now(),
      name,
      image,
      description,
      price,
      category,
      ingredients,
    };

    const response = await createItem(menuItems); // this is actually a menu Item
    if (response === true) {
      alert('Item Added Successfully');
      navigate("/view");
    } else {
      alert('Error While Adding This Item');
    }

  };

  const onNameChange = (e) => {
    let value = e.target.value;
    if (value.length > 20) {
      alert("Noooooooo Please !!!!! toooo much");
      value = value.substring(0, 20);
    }
    if (value.includes("find")) {
      value = value.replace("find", "fry");
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