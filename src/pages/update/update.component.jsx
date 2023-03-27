import './update.css';

import Form from '../../components/add/form/form.component';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../components/providers/user-provider.component';

const UpdatePage = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const params = useParams();
  useEffect(() => {
    //This code excuting when the component did mount 
    if (!userContext.user)
      navigate('/login', { replace: true });
  }, []);

  return (
    <div className='add'>
      <h1>Update item</h1>
      <Form id = {params.id} />
    </div>
  );
};

export default UpdatePage;