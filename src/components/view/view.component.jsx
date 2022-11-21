import "./view.css";
import Cards from "../cards/cards.component";
import { useNavigate} from 'react-router-dom';
import { useEffect } from "react";


const ViewPage = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    // To check if the user is already logged in, send him to the view page
    if (!props.user?.id) {
      navigate('/login', { replace: false });
    }
  }, []);

  return (
    <div>
      <h1 className="view-page-header">&nbsp;</h1>
      <Cards />
    </div>
  );
};

export default ViewPage;
