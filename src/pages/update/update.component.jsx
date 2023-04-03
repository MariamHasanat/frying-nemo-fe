import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../../components/add/form/form.component';
import {UserContext} from '../../components/providers/user-provider.component';
import './update.css';


const UpdatePage = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const params = useParams();

  useEffect(() => {

    if (!userContext.user)
      navigate('/login', { replace: true });
  }, []);

  return (
    <div className='add'>
      <h1>Update item</h1>
      <Form id={params.id} />
    </div>
  );
};

export default UpdatePage;