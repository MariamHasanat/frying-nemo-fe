
import React, { useState } from "react";

export const UserContext = React.createContext(null);
const UserProvider = (props) => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const setUserOverride = user => {
        setUser(user);
        sessionStorage.setItem('user', JSON.stringify(user));
    };

    return (
        <UserContext.Provider value={{ user, setUser: setUserOverride }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;