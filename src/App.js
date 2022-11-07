import { useState } from "react";
import NotFoundPage from "./components/not-found/not-found/not-found";
import AddPage from "./components/pages/add/add.component";
import ViewPage from "./components/view/view.component";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewItemPage from "./view-item/view-item.component";


function App() {


  return (
    <div>
  <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to='/view' replace />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/view-details/:id" element={<ViewItemPage/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}
export default App;
