import { useState } from "react";
import NotFoundPage from "./components/not-found/not-found/not-found";
import AddPage from "./components/pages/add/add.component";
import ViewPage from "./components/view/view.component";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <div>
  <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/add" element={<AddPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}
export default App;
