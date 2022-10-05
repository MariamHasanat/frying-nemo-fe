import './add.css';

import Form from '../../components/add/form/form.component';
import Header from '../../components/common/header/header.component';

const AddPage = (props) => {
    return (
        <div className='add-form'>
            <Header/>
            <h1>Add a new item</h1>
            <Form />
        </div>
    );
};

export default AddPage;