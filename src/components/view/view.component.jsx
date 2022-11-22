import "./view.css";
import Cards from "../cards/cards.component";
import { useNavigate} from 'react-router-dom';
import { useContext,useEffect } from 'react';
import { UserContext } from "../providers/user-provider.component";

const ViewPage = (props) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  useEffect(() => {
    // To check if the user is already logged in, send him to the view page
    if (!userContext.user?.id) {
      navigate('/login', { replace: false });
    }
  }, []);

  return (
    <div>
      <h1 className="view-page-header">&nbsp;</h1>
      <Cards dispatch={props.dispatch} cart={props.cart} />
    </div>
  );
};

export default ViewPage;
