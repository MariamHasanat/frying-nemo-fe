import React, { useContext, useReducer, useState } from "react";

export const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const updateUser = (user) => {
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
