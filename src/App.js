import { useState } from "react";
import Form from "./components/add/form/form.component";
import Handel from "./components/header/header";
import AddPage from "./pages/add/add/add.component";

import NotFound from "./pages/add/not-found/not-found";
import View from "./pages/add/view/view";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Start from "./pages/start/start ";
import ViewItemPage from "./pages/add/viewitempage/viewitempage";
function App() {
  // const path = window.location.pathname;
  // console.log(path);
  // let page = null;
  // if (path === '/add')
  //   page = <AddPage />
  // else if (path === '/view')
  //   page = <View />
  // else page = <NotFound />


  return (
    <div>

      <BrowserRouter >
        <Handel />
        <Routes>
        <Route path="/" element={<Navigate to="view"/>} />
          <Route path="/*" element={<NotFound/>} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/view" element={<View />} />
          <Route  path="/view/:id" element={<ViewItemPage  />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
