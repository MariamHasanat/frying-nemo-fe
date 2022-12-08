
import { CreateItem } from "../../services/item";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useAddItem=()=>{
  const [name, setName] = useState('yara');
  const [Ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
 
  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = e => {
    e.preventDefault();
    const image = e.target.image.value;
    const Price = Number(e.target.Price.value);
    const Description = e.target.Description.value;
    const category = e.target.category.value;

    const menuItem = {
      id: Date.now(),
      name,
      Description,
      image,
      Price,
      category,
      Ingredients

    };
    const res = CreateItem(menuItem);
    if (res) {
      alert
        ("item added successfully");
      navigate('/view');
    }
    else {
      alert('error adding the item !');
    }

  };



  /**
   * Handles on change events on the name field.
   * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
   */
  const onNameChange = (e) => {
    let value = e.target.value;

    if (value.includes('.')) {
      alert('. character is not allowed');
      value = value.replace('.', '');
    }

    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, 'fry');
    }

    setName(value);
  };
  return {
    name :{
      value:name,
      onChange :onNameChange
    },
    Ingredients:{
      value:Ingredients,
      setValue:setIngredients
    },
    submit:submitHandler
  }
}
export default useAddItem;