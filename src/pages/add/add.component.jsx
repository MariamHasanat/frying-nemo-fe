import "./add.css";
import Form from "../../components/add/form/form.component";

const AddPage = (props) => {

  return (
    <div className="head">
      <Form onNavigate={props.onNavigate} user={props.user} />
    </div>
  );
};

export default AddPage;
