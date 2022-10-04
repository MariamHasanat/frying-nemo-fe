import { useState } from "react";
import Input from "../../common/input/input.component";
import Textarea from "../../common/textarea/textarea.component";
import Select from "../../common/select/select.component";
import "./form.css";

const Form = (props) => {
  const [name, setName] = useState("");

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
    <form className="addForm" onSubmit={submitHandler}>
      <Input label="Name" value={name} onChange={onNameChange} required />
      <Textarea label="Description" />
      <Input label="price" type="number" required />
      <Select label="category">
        {catigories.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </Select>
      <div className="addFormButtons">
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default Form;
