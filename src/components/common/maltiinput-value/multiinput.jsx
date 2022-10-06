import Input from '../input/input';
import './multiinput.css';
const Multiinput = props => {
  /**\
   * 
   */
  return (
    <div>
      <div>
        <Input label={props.label}/>
      </div>
      <button className='nemo' >Add</button>
    </div>
  );
};
export default Multiinput;