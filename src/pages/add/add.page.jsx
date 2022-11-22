import { useEffect, useContext } from 'react';
import './add.css';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/add/form/form.component';
import { UserContext } from '../../components/providers/user-provider.component';

const AddPage = () => {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (userContext.user === null) {
            navigate('/log-in', { replace: true });
        }
    }, []);
    return (
        <div className='add-form'>
            <h1>Add a new item</h1>
            <Form user={userContext.user} />
        </div>
    );
};

export default AddPage;