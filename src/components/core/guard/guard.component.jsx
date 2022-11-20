import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from '../../user-provider/user-provider';


const Guard = (props) => {
  const userContext = useContext(UserContext);
  // if user not exist
  if (!userContext.user) {
    return <Navigate to='/login' />;
  }
  // if user login but not allowed to access the page
  else if (props.permittedRoles && !props.permittedRoles.include(userContext.user.role)) {
    return <div>
      <p>You Are Not Allowed To Access This Page !</p>
    </div>;
  }
  else {
    return props.children;
  }
};

export default Guard;