import React from 'react'
import "./Provider.css"
import { useState } from "react";
import { UserContext } from '../../App';

/**
 * 
 * @param {{children:React.ReactNode;}} pro 
 * @returns
 */
function UserProvider(pro) {
  const initialization=JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(initialization);
  const setUserOverride = user => {
   setUser(user);
   if (user === null) {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    
  } else {
    localStorage.setItem('user', JSON.stringify(user));
  }

 };
 
 return(
  <UserContext.Provider value={{user,setUser:setUserOverride}}>
    <div >{pro.children}</div>
    </UserContext.Provider>
 )
}

export default UserProvider