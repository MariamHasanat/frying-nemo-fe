import './add.css';

import Form from '../../components/add/form/form.component';

const AddPage = (props) => {
  return (
    <>
      <div className='add-page'>
        <h1>Add new item form</h1>
        <Form user={props.user} />
      </div>
    </>
  );
};

export default AddPage;