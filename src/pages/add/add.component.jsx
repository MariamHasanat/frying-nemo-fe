import Form from '../../components/add/form/form.component';
import './add.css';

const AddPage = (props) => {
  return (
    <div>
      <h1>Add a new item</h1>
      {/* <Form onNavigate={props.onNavigate} /> */}
     <Form onNavigate={props.onNavigate}/>
 
    </div>
  );
};

export default AddPage;