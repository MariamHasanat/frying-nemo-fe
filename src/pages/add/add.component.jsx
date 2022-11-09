import './add.css';

import Form from '../../components/add/form/form.component';

const AddPage = (props) =>{

  return (
    <div className="add-page">
      <h1>Next new  delicious food? </h1>
      <Form onNavigate={props.onNavigate} user={props.user} />
    </div>
  );
}
export default AddPage;