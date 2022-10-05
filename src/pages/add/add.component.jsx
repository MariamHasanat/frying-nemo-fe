import './add.css';

import Form from '../../components/add/form/form.component';
import Head from '../../components/pop/header';

const AddPage = (props) => {
  return (
    <div>

      <Head/>
      {/* <h1>Add a new item</h1> */}
      <Form />
    </div>
  );
};

export default AddPage;