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

    const menuItem = {
      name: name,
    };

    console.debug("Form submitted", menuItem);
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
        <Input label="Name" value={name} onChange={onNameChange} required />
        <Textarea label="Description" />
        <Input label="price" type="number" required />
        <Select label="categories">
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
        onChange={newIngredients => setIngredients(newIngredients)}
      />
        <div className="addFormButtons">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
