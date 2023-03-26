import { React, useContext } from "react";
import "./form.css";
import Input from "../../common/input/input.component";
import Textarea from "../../common/textarea/textarea.component";
import Select from "../../common/select/select.component";
import MultivalueInput from "../../common/multivalue-input/multivalue-input.component";
import { CATEGORIES } from "../../../data/constants";
import { UserContext } from "../../../components/providers/user-provider";
import useAddItem from "../../../hooks/add-item.hook";

const Form = () => {

  const userContext = useContext(UserContext);
  const addItem = useAddItem();

  return (
    <form onSubmit={addItem.submitHandler} className="add-item-form">
      <div>
        <div style={{ textAlign: "right" }}>
          <button type="submit" disabled={userContext.user?.role !== "ADMIN"}>
            Add Item
          </button>
        </div>

        <Input label="name" name="name" required />
        <Input label="Price" name="price" required />

        <Textarea name="description" label="description" />

        <Select name="category" label="category" options={CATEGORIES} />

        <MultivalueInput
          label="ingredients"
          value={addItem.ingredients.value}
          onChange={(newIngredients) => addItem.ingredients.setIngredients(newIngredients)}
        />

        <Input name="image" label="image" required />
      </div>
    </form>
  );


};

export default Form;
