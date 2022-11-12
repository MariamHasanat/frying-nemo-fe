import React from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../components/add/form/provider/UserProvider';

const Guard = (props) => {
  const userContext = useContext(UserContext);
 
    if(!userContext.user) {
       return <Navigate to='/login'/>;
    }
    else if(props.permittedRole && !props.permittedRole.includes(userContext.user.role))  {
       return  <div>
           <p>You are not allowed</p>
         </div>;
    }
    else 
      return props.children
 
}

export default Guard
