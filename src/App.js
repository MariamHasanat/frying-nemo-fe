import AddPage from "./pages/add/add.component";
// import { useState } from "react";
import Header from "./logo/Header";
import ViewPage from "./pages/view/ViewPage";
import Notfound from "./pages/not-found/Notfound";
import './common.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {
 
  return (
    <div>
      <BrowserRouter>
         <Header />
        <Routes>
          <Route path="/add" element={<AddPage />}/>
          <Route path="/view" element={<ViewPage />}/>
          <Route path="/*" element={<Notfound />}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
