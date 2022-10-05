import './add.css';

import Form from '../../components/add/form/form.component';
import Header from '../../components/common/header/header.component';

const AddPage = (props) => {
  return (
    <>
      <Header />
      <div className='add-page'>
        <h1>Add new item form</h1>
        <Form />
      </div>
    </>
  );
};

export default AddPage;