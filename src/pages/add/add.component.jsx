import './add.css';
import Form from '../../components/add/form/form.component';
import Header from '../../components/core/header/header.component';

const AddPage = (props) => {
  return (
    <div>
      <Form onNavigate={props.onNavigate} />
    </div>
  );
};

export default AddPage;