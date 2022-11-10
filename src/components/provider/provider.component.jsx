import React, { useState } from "react";
import { createContext } from "react";

export const userContext = React.createContext(null);

const UserProvider =(props) => {
  const initialUser=JSON.parse(sessionStorage.geItem('user'));
  const[user,setUser] =useState(initialUser);

  
  const overrideSetUser = user => {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <userContext.provider value={{user,setUser:overrideSetUser}}>
      {props.children}
    </userContext.provider>
  );
};

export default UserProvider;