import './add.css';
import Form from '../../components/add/form/form.component';

const AddPage = (props) => {

    return (
        <div className='add-page'>
            {/* <h3 className='clock'>time now: {time.toLocaleTimeString()}</h3> */}
            <h1>Add a new item</h1>
            <div className="main">
                <Form />
            </div>
        </div >

    );
};

export default AddPage;