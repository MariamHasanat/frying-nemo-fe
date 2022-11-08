import './add.css';
import React from 'react';

import Form from '../../components/add/form/form.component';
const userContext = userContext(userContext);
const AddPage = (props) => {
  return (
    <div className="add-page">
      <h1>Add Menu Item</h1>
      <Form  onNavigate={props.onNavigate} user={userContext}/>
    </div>
  );
};

export default AddPage;