import "./multi-value-input.css";
import Input from "../common/input/input.component";

const MultiValueInput = (props) => {
  return (
    <div className="indegridients-wrapper">
      <div className="indegridients-input-wrapper">
        <Input className="indegridients-input" label={props.label} />
        <button className="indegridients-button" type="button">Add</button>
      </div>
      <div className="indegridients-list-wrapper">
        <ul></ul>
      </div>
    </div>
  );
};

export default MultiValueInput;
