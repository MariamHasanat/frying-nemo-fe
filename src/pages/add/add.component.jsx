import './add.css';
import Form from '../../components/add/form/form.component';

const AddPage = (props) => {
  return (
    <div>
      <div className='logo'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" width={70} />
        <p>Frying Nemo</p>
      </div>
      <h1>Add new Item</h1>
      <Form />
    </div>
  );
};

export default AddPage;