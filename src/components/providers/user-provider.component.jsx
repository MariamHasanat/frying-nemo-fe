import React from 'react';
import { useState } from 'react';
export const UserContext = React.createContext(null); // provider (context definition object)

/**
 * 
 * @param {children : React.reactNodes} props 
 * @returns 
 */
const UserProvider = (props) => {
  const initialUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);

  const setUserOverride = user => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div>
      <UserContext.Provider value={{ user, setUser: setUserOverride }}>
        {props.children}
      </UserContext.Provider>
    </div>
  );
};

export default UserProvider;
