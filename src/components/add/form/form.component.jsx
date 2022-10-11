import { useState } from "react";
import Input from "../../common/input/input.component";
import Textarea from "../../common/textarea/textarea.component";
import Select from "../../common/select/select.component";
import "./form.css";
import MultivalueInput from "../../multi-value-input.jsx/multivalue-input.component";

const Form = (props) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = (e) => {
    e.preventDefault();
    let description = e.target.description.value;
    let price = e.target.price.value;
    let category = e.target.category.value;
    const menuItem = {
      name: name,
      description: description,
      price: parseInt(price),
      category: category,
      ingredients,
    };
    e.target.description.value = "";
    e.target.price.value = "";
    setName("");
    setIngredients([]);
    const itemsJson = localStorage.getItem("menuItems") || "[]";
    const items = JSON.parse(itemsJson);
    items.push(menuItem);
    localStorage.setItem("menuItems", JSON.stringify(items));
    props.onNavigate("view");
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
  let catigories = ["SeaFood", "Drinks", "MainDish", "Salad"];
  return (
    <div className="form-container">
      <h1>Add Menu Item</h1>
      <form className="addForm" onSubmit={submitHandler}>
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
          {catigories.map((item) => {
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
        <div className="addFormButtons">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
