import './pageContainerStyle.css';

import Form from '../../components/form/form.component';
import WithBorder from '../../components/with-border/with-border';

const AddPage = (props) => {
  return (
    <div className='form-container'>
      <h1 className='h1'>Add a new item</h1>
      <WithBorder>
        <Form />
      </WithBorder>
    </div>
  );
};

export default AddPage;