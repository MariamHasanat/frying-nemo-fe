import { useState } from 'react';
import './form.css';


// const submitHandler = e => {
//   e.preventDefault();
//   const target = e.target;
//   console.debug(target.ATTRIBUTE_NODE);
// }
// const Form = (props) => {
//   return (
//     <form className='add-form' onSubmit={submitHandler}>
//       <input type="text" 
//       name='name'
//       placeholder ='John Doe'
//       />
//       <div>
//         <button>
//           Create
//         </button>
//       </div>
//       </form>
//   );
// };


const Form = (props) => {
  const [name, setName] = useState(`John Doe`)
  /**
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const submitHandler = e => {
    e.preventDefault();
    console.debug(e.target.name.value)
  }
  const changeName = (value) => {
    const isAllowed = (char) => {
      console.log(`char: ${char}`)
      if (char == ' ') {
      }
      const allowed = [['a', 'z'], ['A', 'Z'], [' ', ' ']]
      for (let i = 0; i < allowed.length; i++) {
        if (char >= allowed[i][0] && char <= allowed[i][1]) {
          return true;
        }
      }
      return false;
    }
    if (value.target.value.length > 20) alert(`You can't enter more than 20 characters`)
    else if (isAllowed(value.nativeEvent.data)) setName(value.target.value.replace('find', 'fry'))
    else alert(`Denied character (${value.nativeEvent.data})`)
  }
  return (
    <form className='add-form' onSubmit={submitHandler}>
      <input type="text" name='name' placeholder='Name' value={name} onChange={e => {
        changeName(e)
      }}/>
      <div>
        <button type="submit">
          Create
        </button>
      </div>
    </form>
  );
};
export default Form;
