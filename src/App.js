import React from "react";
import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/page not found/page-not-found.component";
import ViewPage from "./pages/view/view.component";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

 function App() {
   return (

    <div>
      
       <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<NotFound/>} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

