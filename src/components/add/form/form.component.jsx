import { useState } from 'react';
import './form.css';



const Form = (props) => {
  const [name, setName] = useState(`John Doe`)
  /**
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const submitHandler = e => {
    e.preventDefault();

    const description = e.target.description.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;

    const menuItem = {
      name: name,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };

    const itemsJson = localStorage.getItem('menuItems') || '[]';
    const items = JSON.parse(itemsJson);

    items.push(menuItem);

    localStorage.setItem('menuItems', JSON.stringify(items))
  };

  /**
   * Handles on change events on the name field.
   * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
   */
  const onNameChange = (e) => {
    let value = e.target.value;

    if (value.includes('.')) {
      alert('. character is not allowed');
      value = value.replace('.', '');
    }
    if (value.target.value.length > 20) alert(`You can't enter more than 20 characters`)
    else if (isAllowed(value.nativeEvent.data)) setName(value.target.value.replace('find', 'fry'))
    else alert(`Denied character (${value.nativeEvent.data})`)
  }
  return (
    <form className="addForm" onSubmit={submitHandler} >
      <Input
        label="Name"
        value={name}
        onChange={onNameChange}
        required
      />
      <Textarea
        name="description"
        label="Description (Add your description here. Customers will be able to read it)"
      />
      <Input
        name="price"
        label="Price"
        type="number"
        min={0}
        required
      />
      <Select name="category" label="Category" required>
        {categories.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select>
      <MultivalueInput
        label="Ingredients"
        value={ingredients}
        onChange={newIngredients => setIngredients(newIngredients)}
      />
      <div className="addFormButtons">
        <button className="nemo-button" type="submit">Create</button>
      </div>
    </form>
  );
};
export default Form;
