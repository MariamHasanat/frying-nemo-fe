import React, { useState } from "react";
import Handel from "./components/header/header";
import AddPage from "./pages/add/add/add.component";

import NotFound from "./pages/add/not-found/not-found";
import View from "./pages/add/view/view";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ViewItemPage from "./pages/add/viewitempage/viewitempage";
import LoginPage from "./pages/add/login/login";
import Providers from "./components/provider/provider";
import Guard from "./components/guard/guard";


function App() {

  return (
    <div>
      <BrowserRouter >
        <Providers>
          <Handel  />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="view" />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/add" element={<Guard  permittedRole={permittedRole} ><AddPage /></Guard>} />
            <Route path="/view" element={<View />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
          </Routes>
        </Providers>
      </BrowserRouter>
    </div>
  );
}

export default App;
