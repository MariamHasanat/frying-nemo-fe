import {BrowserRouter , Route , Routes , Navigate} from 'react-router-dom'
import ViewItemPage from './pages/view/ViewItem/ViewItemPage';
import Notfound from "./pages/not-found/Notfound";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/ViewPage";
import LoginPage from './pages/login/LoginPage';
import Header from "./logo/Header";
import { useState } from 'react';
import './common.css';

function App() {
  const initial = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initial);

  const setUserOverride = user => {
    setUser(user);
    sessionStorage.setItem('user' , JSON.stringify(user));
  }
  return (
    <div>
      <BrowserRouter>
         <Header user={user}/>
        <Routes>
          <Route path="/" element={<Navigate to='/view' replace/>} />
          <Route path="/login" element={<LoginPage user={user} setUser={setUserOverride} />}  />
          <Route path="/add" element={<AddPage user={user} />}/>
          <Route path="/view" element={<ViewPage user={user}/>}/>
          <Route path="/view/:id" element = {<ViewItemPage />} />
          <Route path="/*" element={<Notfound />}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
