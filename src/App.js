// import { useState } from "react";

import Head from "./components/pop/header";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/not-found/notfound";
import { Navigate,BrowserRouter, Routes, Route } from "react-router-dom";
import ViewPage from "./pages/view/view";
// import { render } from "react-dom";
;
function App() {

  return (
    <div>

      <BrowserRouter>
        <Head />

        <Routes>
          <Route path="/add" element={<AddPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/add"/> }  /> 
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
