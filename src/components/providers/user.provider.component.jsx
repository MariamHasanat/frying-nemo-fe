import React,{ useState }  from "react";

export const UserContext = React.createContext(null);


  /**
 * 
 * @param {(children: React.ReactNode;)} props 
 * @returns
 */
const UseProvider = (props) =>{
const initalUser = JSON.parse(sessionStorage.getItem("user"));
  const [user, setUser] = useState(initalUser);
  const setUserOverride = (user) => {
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
    console.log(user);
  };
  return(
  <UserContext.Provider value={{ user, setUser: setUserOverride }}>
    {props.children}
  </UserContext.Provider>
  );
};

export default UseProvider;