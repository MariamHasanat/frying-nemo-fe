import './add.css';
import { UserContext } from '../../components/providers/user-provider.component';
import { useContext } from 'react';
import Form from '../../components/add/form/form.component';


const AddPage = () =>{
  const props = useContext(UserContext);

  return (
    <div className="add-page">
      <h1>Next new  delicious food? </h1>
      <Form onNavigate={props.onNavigate} user={props.user} />
    </div>
  );
}
export default AddPage;