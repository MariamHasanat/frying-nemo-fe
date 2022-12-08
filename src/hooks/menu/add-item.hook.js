import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../services/items";

const useAdditem = () => {
  const [name, setName] = useState("ali");
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);
  const submitHandler = async (e) => {
    e.preventDefault();

    const descreption = e.target.descreption.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;
    const image = e.target.image.value;

    const menuItem = {
      name, // or name =name
      price,
      descreption,
      category,
      ingredients,
      image,
    };
    const res = await createItem(menuItem);

    if (res) {
      alert("item added successfully!");
      navigate("/view");
    } else {
      alert("Error Adding the Item !");
    }
  };
  const onNameChange = (e) => {
    let value = e.target.value;
    if (value.includes(".")) {
      alert("there a char in name");
    }
    if (value.includes("find")) {
      value = value.replace("find", "fry");
    }
    if (value.length > 20) {
      alert("please edit that");
    }
    setName(value);
    // console.log(value);
  };
  return {
    name: {
      value: name,
      onChange: onNameChange,
    },
    ingredients: {
      value: ingredients,
      setValue: setIngredients,
    },
    submit: submitHandler,
  };
};
export default useAdditem;
