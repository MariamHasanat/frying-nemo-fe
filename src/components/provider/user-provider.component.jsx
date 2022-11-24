import React  from "react";
import { useState } from "react";
export const UserContext = React.createContext(null);

const UserProvider =(props) =>{
  const intUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(intUser);

  const setUserOverride = user => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  return(
    <UserContext.Provider value={{user , setUser : setUserOverride}}>
      {props.childern}
    </UserContext.Provider>

  );
};

export default UserProvider;


