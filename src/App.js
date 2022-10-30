import AddPage from "./pages/add/add.component";
import ViewPage from "./components/ViewPage/ViewPage";
import NotFoundPage from "./components/notfound/NotFound ";
import { useState } from "react";
import Header from "./components/core/header/header.componet";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="flex"> 
        <Routes>
            <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
            <Route path="/add" element={<AddPage></AddPage>} ></Route>
            <Route path="/view" element={<ViewPage></ViewPage>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
