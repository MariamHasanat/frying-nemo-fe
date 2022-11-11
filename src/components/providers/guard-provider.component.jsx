import React from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './user-provider.component';

const Guard = (props) => {
  const userContext = useContext (UserContext) ;
  if (!userContext.user?.id) {
    return (<Navigate to = '/login'/>)
  }
  else if (!props.permittedRoles.includes (userContext.user.role)) {
    return (
      <p>You dont have the permission to access this page !</p>
    )
  }
  else {
    return (props.children)
  }
  
}

export default Guard