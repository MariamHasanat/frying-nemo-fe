import './add.css';
import Form from '../../components/add/form/form.component';
import {useLocation} from 'react-router-dom';

const AddPage = () => {
    const location = useLocation();
    console.log("location", location)
    console.log("oldItem form location", location?.state?.oldItem)
    return (
        <div className='add-page'>
            <h1>Add a new item</h1>
            <div className="main">
                <Form item={location?.state?.oldItem}/>
            </div>
        </div >

    );
};

export default AddPage;