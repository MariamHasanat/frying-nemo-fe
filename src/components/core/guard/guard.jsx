import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../providers/user-provider";
import './guard.css';
import lock from '../../../assets/lock.svg';

/**
 * Page guard component
 * @param {{
 *  children: React.ReactNode;
 *  permittedRoles?: string[];
 * }} props 
 */


const Guard = (props) => {

  const userContext = useContext(UserContext);
  if (!userContext.user) {
    return <Navigate to="/login" />;
  } else if (props.permittedRoles && !props.permittedRoles.includes(userContext.user.role)) {
    return (
      <div className="noAccess">
        <img src={lock} alt="no access" />
        <p> you don't have permission to access this page </p>
      </div>
    );
  } else {
    return props.children;
  }

};

export default Guard;