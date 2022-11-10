import { useState } from "react";
import { UserContext } from "../../App";

/**
 * 
 * @param {{children : React.ReactNode}} props 
 * @returns 
 */
const UserProvider = (props) => {
  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);

  const saveUser = user => {
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ user, setUser: saveUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
