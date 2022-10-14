import './add.css';

import Form from '../../components/add/form/form.component';

const AddPage = (props) => {
  return (
    <div className='add'>
      <h1>Add a new item</h1>
      <Form onNavigate = {props.onNavigate} 
      onAdd = {props.onAdd}/>
    </div>
  );
};

export default AddPage;