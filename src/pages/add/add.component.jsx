import './add.css';

import { React } from 'react';

import Form from '../../components/add/form/form.component';
import WithBorder from '../../components/with-border/with-border.component';
const AddPage = (props) => {

  return (
    <div className="add-page">
     <WithBorder> <h1>Add Menu Item</h1> </WithBorder>
      <Form  onNavigate={props.onNavigate}/>
    </div>
  );
};

export default AddPage;