import React from "react";
import { useState } from "react";
import { UserContext } from '../../App';



const UserProvider = (props) => {
  const initialUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);
  const setUserOverride = user => {
    setUser(user);
 localStorage.setItem('user', JSON.stringify(user));
  };
  return (

    <UserContext.Provider value={{ user, setUser: setUserOverride }}>
      {props.children}
    </UserContext.Provider>

  );
};
export default UserProvider;