import './form.css';
import { useState } from 'react';
import './form.css';


const Form = (props) => {
  const [name, setName] = useState('Lana');

  /**
   * Handler fn for the form onSubmit event .
   * @param {React.FormEvent<HTMLFormElement>}e Event object.
   */


  const submitHandler = e => {
    e.preventDefault();

    /**
     * @type {HTMLFormElement}
     */
    const target = e.target;
    console.debug(target.ATTRIBUTE_NODE);
  };


  return (
    <form className="add-form" onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div style={{ marginTop: 20 }}>
        <button type="submit">Create </button>
      </div>
    </form>
  );
};

export default Form;