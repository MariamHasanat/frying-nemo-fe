import React, { useState } from "react";

export const UserContext = React.createContext(null);

/**
 * 
 * @param {
 * children : React.ReactNode;
 * } props 
 * @returns
 */

const UserProvider = props => {
  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);
  const setUserOVerride = user => {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };
  return (
    <UserContext.Provider value={{ user, setUser: setUserOVerride }}>
      {props.children}
    </UserContext.Provider>
  );

};

export default UserProvider;
