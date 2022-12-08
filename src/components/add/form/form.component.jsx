import { useContext } from "react";
import { UserContext } from "../../providers/user-provider.component";

import Input from "../../common/input/input.component";
import Textarea from "../../common/textarea/textarea.component";
import Select from "../../common/select/select.component";
import "./form.css";
import MultivalueInput from "../../common/multi-value-input.jsx/multivalue-input.component";
import "../../../../src/common.css";
import { CATEGORIES } from "../../../data/constants";

import useAddItem from "../../../hooks/add-item/add-item.hook";

const Form = () => {
  const addItem = useAddItem();
  const userContext = useContext(UserContext);
  return (
    <div className="form-container">
      <br/>
      <br/>
      <br/>
      <form className="addForm" onSubmit={addItem.submit}>
        <h1>Add Menu Item</h1>
        <Input
          name="name"
          label="Name"
          value={addItem.name.value}
          onChange={addItem.name.onChange}
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
          value={addItem.ingredients.value}
          onChange={(newIngredients) => addItem.ingredients.setIngredient(newIngredients)}
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
