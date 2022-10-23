// import { useState } from "react";

import Head from "./components/pop/header";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/not-found/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
