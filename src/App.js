import { useState } from "react";
import AddPage from "./pages/add/add.component";
import NotFoundPage from "./pages/not-found/notfound-component";
import ViewPage from "./pages/view/view.component";
import Header from "./components/core/header/header.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<NotFoundPage />}/>
          <Route path="/add" element={<AddPage />}/>
          <Route path="/view" element={<ViewPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
