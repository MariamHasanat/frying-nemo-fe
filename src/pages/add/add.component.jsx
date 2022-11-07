import './add.css';
import Form from '../../components/add/form/form.component';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPage = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.user === null) {
            navigate('/log-in', { replace: true });
        }
    }, [navigate, props.user]);
    return (
        <div className='add-form'>
            <h1>Add a new item</h1>
            <Form user={props.user} />
        </div>
    );
};

export default AddPage;