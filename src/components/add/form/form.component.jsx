import { useState,useContext } from "react";
import { UserContext } from "../../providers/user-provider.component";
import { useNavigate } from "react-router-dom";
import Input from "../../common/input/input.component";
import Textarea from "../../common/textarea/textarea.component";
import Select from "../../common/select/select.component";
import "./form.css";
import MultivalueInput from "../../common/multi-value-input.jsx/multivalue-input.component";
import "../../../../src/common.css";
import { CATEGORIES } from "../../../data/constants";

const Form = (props) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = (e) => {
    e.preventDefault();
    let description = e.target.description.value;
    let price = e.target.price.value;
    let category = e.target.category.value;
    let photo = e.target.photo.value;
    const menuItem = {
      id: Date.now(),
      name: name,
      description: description,
      price: parseInt(price),
      category: category,
      ingredients,
      photo: photo
    };
    e.target.description.value = "";
    e.target.price.value = "";
    setName("");
    setIngredients([]);
    const itemsJson = localStorage.getItem("menuItems") || "[]";
    const items = JSON.parse(itemsJson);
    items.push(menuItem);
    localStorage.setItem("menuItems", JSON.stringify(items));
    navigate("/view");
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
  const userContext = useContext(UserContext);
  return (
    <div className="form-container">
      <br/>
      <br/>
      <br/>
      <form className="addForm" onSubmit={submitHandler}>
        <h1>Add Menu Item</h1>
        <Input
          name="name"
          label="Name"
          value={name}
          onChange={onNameChange}
          required
        />
        <Textarea name="description" label="Description" />
        <Input name="price" label="price" type="number" required />
        <Select name="category" label="categories">
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
        <Input name="photo" label="insert photo link" type="text"/>
        <div className="addFormButtons">
          <button type="submit" disabled={userContext.user?.role !== 'ADMIN'}>Create</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
