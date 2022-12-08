import './checkbox.css';

const CheckBox = ({...props}) => {
  return <div className='checkbox-container'>
    <input {...props} type="checkbox" id="tourist" name="tourist" value="Tourist"></input>
    <label for="tourist"> Tourist</label>
  </div>;
};

export default CheckBox;