import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Access from "../../pages/add/access/access.componant";
import { UserContext } from "../provider/provider.component";

const Guard=(props)=>{
  const userContext =useContext(UserContext);
  if(!userContext.user){
    return <Navigate to={'/login'}/>;
  } else if (props.permittedRoles && !props.permittedRoles.includes(userContext.user.role)) {
    return (
      <div className="noAccess">
        <Access/>
      </div>
    );
  } else {
    return props.children;
  }
}
export default Guard;