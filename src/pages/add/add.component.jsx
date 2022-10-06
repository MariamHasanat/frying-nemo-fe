import './add.css';

import Form from '../../components/add/form/form.component';
import Handel from './handel/handel';

const AddPage = (props) => {
  return (
    <div>
      <Handel
      img = './fish.png'
      />
      <Form />
    </div>
  );
};

export default AddPage;