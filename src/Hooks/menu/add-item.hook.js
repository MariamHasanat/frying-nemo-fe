import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createdItem } from "../../services/items";


const useAddItem = () => {
  const [name, setName] = useState('dala');
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  const onNamechange = e => {

    let val = e.target.value;

    if (val.includes('.')) {
      val = val.replace('.', '');
    }

    if (/find/ig.test(val)) {
      val = val.replace(/find/ig, 'fry');
    }

    if (val.length > 20) {
      alert('charecter limit excedded');
      val = val.substring(0, 20);
    }
    setName(val);
  };

  /**
   * Handles on change events on the name field.
   * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
   */

   const handler = async e => {

    e.preventDefault();
    /**
     * @type {HTMLformElement}
     */

    const description = e.target.description.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;
    const image = e.target.image.value;


    const menuItem = {
      name: name,
      description: description,
      image,
      price: price,
      category: category,
      ingredients: ingredients,
      id: new Date()
    };

    const res = await createdItem(menuItem);
    

    navigate('/view');
  };

 return {
  name : {
    value : name , 
    onChange : onNamechange ,
  } ,
  ingredients : {
    value : ingredients , 
    setValue : setIngredients
  },
  submit : handler,
 }
}

export default useAddItem;