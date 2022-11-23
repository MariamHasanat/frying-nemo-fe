import React from "react";
import { useState } from "react";
export const UserContext = React.createContext(null);

/**
 * 
 * @param {{
 * children: React.ReactNode;
 * }} props 
 * @returns 
 */
const UserProvider = (props)=>{
  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser]= useState(initialUser);

  const setUserOverride = user =>{
    setUser(user);
    
    if (user === null) {
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
    } else {
      localStorage.setItem('user', JSON.stringify(user));
    }

  };
  return (
    <UserContext.Provider value={{user, setUser: setUserOverride}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;