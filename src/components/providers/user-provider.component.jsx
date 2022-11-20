
import React, { useState } from "react";


export const UserContext = React.createContext(null);
const UserProvider = () => {
    const initialUser = JSON.parse(sessionStorage.getItem('user'));// when open and close website
const [user, setUser] =useState(initialUser);
const setUserOverride = user=>{//to remove any user in website
setUser(user);
sessionStorage.setItem('user', JSON.stringify(user))
};
return(
    <UserContext.Provider value={{user, setUser:setUserOverride}}>

    </UserContext.Provider>
);
}

export default UserProvider;