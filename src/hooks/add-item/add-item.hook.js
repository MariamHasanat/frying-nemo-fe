import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../services/items";


const useAddItem = () =>{
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = async (e) => {
    e.preventDefault();
    let description = e.target.description.value;
    let price = e.target.price.value;
    let category = e.target.category.value;
    let imageUrl = e.target.imageUrl.value;
    const menuItem = {
      id: Date.now(),
      name: name,
      description: description,
      price: parseInt(price),
      category: category,
      ingredients,
      imageUrl: imageUrl
    };
    e.target.description.value = "";
    e.target.price.value = "";
    setName("");
    setIngredients([]);
    const result =  createItem(menuItem);
    if(result === false){
      alert("wasn't able to create new item, please try again");
    }else{
      alert("item created succesfully!");
      navigate("/view");
    }
  };
  const onNameChange = (e) => {
    let value = e.target.value;

    if (value.includes(".")) {
      alert(". character is not allowed");
      value = value.replace(".", "");
    }

    if (/find/gi.test(value)) {
      value = value.replace(/find/gi, "fry");
    }

    setName(value);
  };

  return {name:{
    value: name,
    onChange: onNameChange
  },
  ingredients:{
    value: ingredients,
    setIngredient: setIngredients
  },
  submit:submitHandler
}

};

export default useAddItem;