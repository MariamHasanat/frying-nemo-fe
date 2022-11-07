// import { useState } from "react";

import Head from "./components/pop/header";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/not-found/notfound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewPage from "./pages/view/view";
import ViewItemPage from "./pages/veiw-item/view-item";
import './App.css';
import Login from "./pages/login/login";
function App() {

  return (
    <div>
      
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/add" element={<AddPage />} />
          {/* <Route path="/*" element={<NotFound /> } /> */}
          <Route path="/view/:id" element={<ViewItemPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/" element={<Navigate to='/view' replace />} />
          <Route path="/login" element={<Login   />}  />
          <Route path="/*" element={<Navigate to='/add' />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;