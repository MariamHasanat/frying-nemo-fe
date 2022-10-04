import './add.css';

import Form from '../../components/add/form/form.component';

const AddPage = (props) => {
  return (
    <div className='add-page'>
      <h1>Add new item form</h1>
      <Form />
    </div>
  );
};

export default AddPage;