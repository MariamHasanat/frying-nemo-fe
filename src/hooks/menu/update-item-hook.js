import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateItem } from "../../services/items";

const useUpdateItem =   (item) => {
 
  const navigate = useNavigate();
  const [name, SetName] = useState(item.name);
  const Params=useParams()
  const [ingredients, setIngredients] = useState([item.ingredients]);
  const submitHandler = async e => {
    e.preventDefault();

    const description = e.target.description.value;
    const imageUrl = e.target.image.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;

    const menuItem = {
      id: Date.now(),
      name: name,
      imageUrl:imageUrl,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };

    const res = await UpdateItem(menuItem,Params.id);
    if (res) {
      alert("the update successfully");
      navigate("/view");
    } else {
      alert("the update is Failed");
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

export default useUpdateItem;



