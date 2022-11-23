import React, { useContext } from 'react';
import { UserContext } from '../providers/provider.component';
import { Navigate } from 'react-router-dom';
import './guard.css';

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
        <img src='https://img.freepik.com/free-vector/locker_53876-25496.jpg' alt="No access" />
        <p>You don't have access to this page</p>
      </div>
    );
  } else {
    return props.children;
  }
};

export default Guard;
