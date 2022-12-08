import React, {  useContext } from "react";
import Input from "../../common/input/input.component";
import MultivalueInput from "../../common/multivalue-input/multivalue-input.component";
import Select from "../../common/select/select.component";
import Textarea from "../../common/textarea/textarea/textarea.component";
import "./form.css";
import { UserContext } from "../../providers/user.provider.component";
import { CATEGORIES } from "../../../data/constant";
import useAdditem from "../../../hooks/menu/add-item.hook";

const Form = () => {
  const userContext = useContext(UserContext);
  const addItem = useAdditem();

  return (
    <form className="add-form" onSubmit={addItem.submit}>
      <div style={{ marginTop: 20 }}>
        <Input label="Name" value={addItem.name.value} onChange={addItem.name.onChange} required />
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
          value={addItem.ingredients.value}
          onChange={(newIngredients) => addItem.ingredients.setValue(newIngredients)}
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
