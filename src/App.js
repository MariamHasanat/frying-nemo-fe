import React from 'react';
import {BrowserRouter , Route , Routes , Navigate} from 'react-router-dom'
import ViewItemPage from './pages/view/ViewItem/ViewItemPage';
import Notfound from "./pages/not-found/Notfound";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/ViewPage";
import LoginPage from './pages/login/LoginPage';
import Header from "./logo/Header";
import { useState } from 'react';
import './common.css';

//null is default value
export const UserContext = React.createContext(null);

function App() {
  const initial = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initial);

  const setUserOverride = user => {
    setUser(user);
    sessionStorage.setItem('user' , JSON.stringify(user));
  }
  return (
    <UserContext.Provider  value={{user , setUser: setUserOverride}}>
           <div>
           <BrowserRouter>
           <Header/>
                  <Routes>
                      <Route path="/" element={<Navigate to='/view' replace/>} />
                      <Route path="/login" element={<LoginPage  />}  />
                      <Route path="/add" element={<AddPage />}/>
                      <Route path="/view" element={<ViewPage />}/>
                      <Route path="/view/:id" element = {<ViewItemPage />} />
                      <Route path="/*" element={<Notfound />}/>
                   </Routes>
           </BrowserRouter>
    </div>
         </UserContext.Provider>
    
  );
}

export default App;
