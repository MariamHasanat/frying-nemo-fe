import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { creatItem } from "../services/items";



const useAddItem = () => {

  const [name, setName] = useState('ayat');
  const [ingrediant, setIngrediant] = useState([]);
  const navigate = useNavigate();

  const submitHandeller = (e) => {
    e.preventDefault();
    /*
     * @type {HTMLFormElement} 
    */

    const description = e.target.description.value;
    const price = Number(e.target.price.value);
    const categories = e.target.categories.value;
    const image = e.target.image.value;

    const menuItem = {
      //or we can use random id 
      id: Date.now(),
      name: name,
      description: description,
      price: price,
      categories: categories,
      ingrediant: ingrediant,
      image,

    };

    /** store item in the local storage before using API */
    // const itemsJson = localStorage.getItem('menuitems');
    // const items = JSON.parse(itemsJson) || [];
    // items.push(menuItem);
    // localStorage.setItem('menuitems', JSON.stringify(items));
    // console.table('menuitems', items);


    /** create item bu  using Fech API method POST */
    creatItem(menuItem);
    navigate('/view');


    ///to store complex object on local storage we need to convert it to json file using JSON.stringify (string representation )
    // use JSON.pars  convert JSON string   -> js object

  };
  const onNameChange = e => {
    let value = e.target.value;
    if (value.includes('.')) {
      alert("not allow char ");
    }

    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, 'fry');
    }
    setName(value);
    console.log('hi');

  };
  return {

    name: {
      value: name,
      onchange: onNameChange
    },

    ingrediant: {
      value: ingrediant,
      setValue: setIngrediant

    },
    submit: submitHandeller

  };

};
export default useAddItem;