import { useState } from "react";
import React from "react";
export const UserContext = React.createContext(null);//قراءة ااذا فش قيمة 
/**
 * @param { { children:React.ReactNode}} props
 * @returns 
 */
const Providers = (props) => {
  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);
  const setUserOver = (user) => {
    setUser(user);
    if(user === null){
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
    }
    else
    sessionStorage.setItem('user', JSON.stringify(user));
  };
  return (
    <UserContext.Provider value={{ user, setUser: setUserOver }}>
      {props.children}
    </UserContext.Provider>

  );
};
export default Providers;