import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../provider/provider";
/**
 * 
 * @param {{children : React.ReactNode}} props 
 * @returns 
 */
const Guard = (props) => {
  const userContext = useContext(UserContext);

  if (!userContext.user) {
    return <Navigate to='/login' />;
  }
  else if (props.permittedRoles && !props.permittedRoles.includes(userContext.user.role)) {
    return <span>You are not allowed to access to this page </span>;
  }
  else {
    return props.children;
  }



};
export default Guard;