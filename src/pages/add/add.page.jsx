import './add.css';

import Form from '../../components/add/form/form.component';

const AddPage = (props) => {

  return (
    <div className="add-page">
      {/* <span className="clock">&#128337;{time.toLocaleTimeString()}</span> */}
      <h1>Add Menu Item</h1>
      <Form onNavigate={props.onNavigate} />
    </div>
  );
};

export default AddPage;