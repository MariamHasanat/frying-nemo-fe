import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/core/providers/user-provider.component";
import { createItem } from "../../services/items";


const useAddItem = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setName] = useState(``);
  const [ingredients, setIngredients] = useState([]);

  const updateIngs = (newIngs) => {
    setIngredients(newIngs);
  };

  const changeName = (value) => {
    const isAllowed = (char) => {
      const allowed = [['a', 'z'], ['A', 'Z'], [' ', ' '], ['0', '9']];
      for (let i = 0; i < allowed.length; i++) {
        if (char >= allowed[i][0] && char <= allowed[i][1]) {
          return true;
        }
      }
      return false;
    };
    if (value.target.value.length > 20) alert(`You can't enter more than 20 characters`);
    else if (isAllowed(value.nativeEvent.data)) setName(value.target.value.replace('find', 'fry'));
    else alert(`Denied character (${value.nativeEvent.data})`);
  };

  const submitHandler = async e => {
    console.log(`wt`);
    const resetForm = () => {
      e.target.reset();
      setName('');
      updateIngs([]);
      navigate('/view');
    };

    e.preventDefault();
    const description = e.target.description.value;
    const price = parseInt(e.target.price.value);
    const category = e.target.category.value;
    const image = e.target.image.value;

    const menuItem = {
      name,
      description,
      price,
      category,
      imageURL: image,
      ingredients,
      addedBy: user._id,
    };

    try {
      await createItem(menuItem);
      resetForm();
    } catch (err) {
      console.log(err);
      alert(`Error while adding the item`);
    }
  };

  return {
    name: {
      value: name,
      onChange: changeName
    },
    ingredients: {
      value: ingredients,
      onChange: setIngredients
    },
    submitHandler: {
      value: submitHandler
    }
  };
};

export default useAddItem;