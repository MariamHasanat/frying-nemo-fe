import './add.css';
import Form from '../../components/add/form/form.component';

const AddPage = () => {

    return (
        <div className='add-page'>
            <h1>Add a new item</h1>
            <div className="main">
                <Form />
            </div>
        </div >

    );
};

export default AddPage;