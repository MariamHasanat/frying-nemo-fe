import React from "react";
import useToggle from "../../../hooks/toggle.hook";

export const DataContext = React.createContext(null);

const DataProvider = ({ children }) => {
  const [isToggled, toggle] = useToggle(false);
  return <DataContext.Provider value={{ isToggled, toggle }}>
    {children}
  </DataContext.Provider>;
};

export default DataProvider;