import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../common/input/input.component";
import MultivalueInput from "../../common/multivalue-input/multivalue-input.component";
import Select from "../../common/select/select.component";
import Textarea from "../../common/textarea/textarea/textarea.component";
import "./form.css";
import UserContext from "../../../components/providers/user.provider.component";
import { CATEGORIES } from "../../../data/constant";

const Form = (props) => {
  const [name, setName] = useState("ali");
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */

  /**
   * Handles on change events on the name feild.
   * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
   */

  const submitHandler = (e) => {
    e.preventDefault();

    const descreption = e.target.descreption.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;
    const image = e.target.image.value;

    const menuItem = {
      name, // or name =name
      descreption,
      price,
      image,
      category,
      ingredients,
    };

    const itemsJSON = localStorage.getItem("menuItems") || "[]";
    const items = JSON.parse(itemsJSON);
    items.push(menuItem);

    localStorage.setItem("menuItems", JSON.stringify(items));
    navigate("/view");
    /**
     * @type {HTMLFormElement}
     */
    const target = e.target;
    console.debug(target.ATTRIBUTE_NODE);
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

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <div style={{ marginTop: 20 }}>
        <Input label="Name" value={name} onChange={onNameChange} required />
        <Textarea name="descreption" label="Descreption" />
        <Input name="price" label="Price" type="number" min={0} required />
      
        <Input name="image" label="Image" type="string" required></Input>
      
        <Select name="category" label="select from menu" required>
          return{" "}
          {CATEGORIES.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </Select>
        <MultivalueInput
          label="Ingredients"
          value={ingredients}
          onChange={(newIngredients) => setIngredients(newIngredients)}
        />
      </div>
      <button
        className="nemo-button special"
        type="submit"
        disabled={userContext.user?.role !== "ADMIN"}
      >
        Create
      </button>
    </form>
  );
};

export default Form;
