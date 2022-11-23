import React , { useState } from 'react'
export const UserContext = React.createContext(null);

const UserProvider = (props) => {
  const initial = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(initial);

  const setUserOverride = user => {
    setUser(user);

    if (user === null) {
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
    } 
    else {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

 return(
    <UserContext.Provider  value={{user , setUser: setUserOverride}}>
      {props.children}
   </UserContext.Provider>
 )
}

export default UserProvider