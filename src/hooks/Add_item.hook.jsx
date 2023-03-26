
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { creatItem } from "../components/add/form/data/items";

const useAddItem=()=>{
  const [ingredients, setIngredients] = useState([]);
  const [name, setname] = useState('jgdj');
  const navigate = useNavigate();

  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e 
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    const imageUrl= e.target.imageUrl.value;
    const price = Number(e.target.price.value);
    const description = e.target.description.value;
    const category = e.target.category.value;
    const menuItem = {
      name: name,
      imageUrl,
      id: Date.now(),
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };


    const res = await creatItem(menuItem);
    if (res) {
       alert("succses go data");
      navigate("/view");
    }
    else {
      alert("ERROR go data");
    }

  };
  const onNameChange = (e) => {
    let value = e.target.value;
    if (value.includes('.')) {
      alert('Wrong input');
      value.replace('.', '');
    }
    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, 'fry');
    }
    if (value.length >= 20) {
      value = value.substring(0, 18);
    }
    setname(value);
  };
  return{
    name:{
      value:name,
      onChange:onNameChange,
    },
    ingredients:{
      value: ingredients,
      setIngredients:setIngredients,
    },
    submit:handleSubmit,
  }
}
export default useAddItem;