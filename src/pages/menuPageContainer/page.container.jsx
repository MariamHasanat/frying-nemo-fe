import './pageContainerStyle.css';

import Form from '../../components/form/form.component';

const AddPage = (props) => {
  return (
    <div className='form-container'>
      <h1 className='h1'>Add a new item</h1>
      <Form onNavigate={props.onNavigate} />
    </div>
  );
};

export default AddPage;