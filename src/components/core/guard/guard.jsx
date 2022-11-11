import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../user-provider/user-provider";
import './guard.css';

const Guard = (props) => {

  const userContext = useContext(UserContext);
  if (!userContext.user) {
    return <Navigate to="/login" />;
  } else if (props.permittedRoles && !props.permittedRoles.includes(userContext.user.role)) {
    return (
      <div className="Guard">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrwRJ0NrjDTnv_dYW3GtEnMpbEI6SGxSAvw&usqp=CAU" alt="no access" />
        <p> you don't have permission to access this page </p>
      </div>
    );
  } else {
    return props.children;
  }

};

export default Guard;