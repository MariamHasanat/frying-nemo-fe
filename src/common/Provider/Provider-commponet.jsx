import React from 'react'
import "./Provider.css"
import { useState } from "react";
import { UserContext } from '../../App';

/**
 * 
 * @param {{children:React.ReactNode;}} pro 
 * @returns
 */
function Provider(pro) {
  const initialization=JSON.parse(sessionStorage.getItem("user"));
  const [user, setUser] = useState(initialization);
  const setUserOverride = user => {
   setUser(user);
   sessionStorage.setItem('user', JSON.stringify(user));
 };
 
 return(
  <UserContext.Provider value={{user,setUser:setUserOverride}}>
    <div >{pro.children}</div>
    </UserContext.Provider>
 )
}

export default Provider