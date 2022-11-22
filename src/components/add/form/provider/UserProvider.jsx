import React , { useState } from 'react'
export const UserContext = React.createContext(null);

const UserProvider = (props) => {
  const initial = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(initial);

  const setUserOverride = user => {
    setUser(user);
    localStorage.setItem('user' , JSON.stringify(user));
  }

 return(
    <UserContext.Provider  value={{user , setUser: setUserOverride}}>
      {props.children}
   </UserContext.Provider>
 )
}

export default UserProvider