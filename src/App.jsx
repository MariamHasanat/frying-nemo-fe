import AddPage from "./pages/add/add.component";
import ViewPage from "./components/ViewPage/ViewPage";
import NotFoundPage from "./components/notfound/NotFound ";
import Header from "./components/core/header/header.componet";
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom'
import { useState } from "react";
import ViewItemPage from "./pages/view-item/view-item.component";
import LoginPage from "./pages/login/login.compent";
import React from "react";

export const UserContext = React.createContext(null);
function App() {


 const initialization=JSON.parse(sessionStorage.getItem("user"));
 const [user, setUser] = useState(initialization);
 const setUserOverride = user => {
  setUser(user);
  sessionStorage.setItem('user', JSON.stringify(user));
};

  return (
    <div>
      <BrowserRouter>
        < Header  user={user} />
        <div className="flex"> 
        <UserContext.Provider value={{user,setUser:setUserOverride}}>
        <Routes>
            <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
            <Route path="/add" element={<AddPage ></AddPage> } ></Route>
            <Route path="/" element={<Navigate to="/view"></Navigate>} ></Route>
            <Route path="/view" element={<ViewPage  ></ViewPage>}></Route>
            <Route path="/view/:id" element={<ViewItemPage></ViewItemPage>}></Route>
            <Route path="/login" element={<LoginPage  />} />
        </Routes>
        </UserContext.Provider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
