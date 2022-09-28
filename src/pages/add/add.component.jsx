import './add.css';

import Form from '../../components/add/form/form.component';

const AddPage = (props) => {
  return (
    <><h1>Add a new item</h1>
      <div className='add-page'>
        <Form />
      </div>
    </>
  );
};

export default AddPage;