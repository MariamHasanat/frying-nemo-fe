import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../../provider/user-provider.component";

const Guard = (props) => {
  const userContext = useContext(UserContext);

  if (!userContext.user) {
    return <Navigate to='/login' />;
    
  } else if (props.permittedRoles && !props.permittedRoles.includes(userContext.user.role)) {
    return <div>
      <p>You don't have an access to this page</p>
    </div>;
  }
  else {
    return props.children;
  }

};

export default Guard;
