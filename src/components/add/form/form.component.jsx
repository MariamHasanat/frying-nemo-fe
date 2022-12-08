import { useState } from "react";
import Input from "../../common/input/input-component";
import Textarea from "../../common/textarea/textarea-component";
import Select from "../../common/select/select-component";
import MultiValuInput from "../../common/multivalue-input/input-component";
import "./form.css";
// import { CATEGORIES } from "../../../data/categories";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/user-provider";
import { createItem } from "../../../services/items";
import { useAddItem } from "../../../hooks/menu/add-item.hook";

const categories = [
  "Fish",
  "Drinks",
  "Hookah",
  "Salads",
  "Sandwiches",
  "Appetizers",
  "Main Dish",
  "Sweet",
];

const Form = (props) => {
  const userContext = useContext(UserContext);
  const addItem = useAddItem();

  return (
    <form className="add-form" onSubmit={addItem.submit}>
      <h1>Add New Items</h1>
      <div style={{ marginTop: 20 }}>
        <Input label="Name" value={addItem.name.value} onChange={addItem.name.onChange} required />
        <Textarea name="description" label="Description" />
        <Input label="Image" name="image" required />
        <Input name="price" label="Price" type="number" required min={0} />
        <Select name="category" label="Category" required>
          {categories.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </Select>
        <MultiValuInput
          label="ingredients"
          value={addItem.ingredients.value}
          onChange={(newIngredients) => addItem.ingredients.setValue(newIngredients)}
        />
        <button
          type="submit"
          className="create"
          disabled={userContext.user?.role !== "ADMIN"}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default Form;
