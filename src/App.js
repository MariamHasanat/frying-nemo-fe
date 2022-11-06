import { useState } from "react";
import AddPage from "./pages/add/add.component";
import NotFoundPage from "./pages/not-found/notfound-component";
import ViewPage from "./pages/view/view.component";
import Header from "./components/core/header/header.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to='/view' replace />}/>
          <Route path="/*" element={<NotFoundPage />}/>
          <Route path="/add" element={<AddPage />}/>
          <Route path="/view" element={<ViewPage />}/>
          <Route path="/view-details/:id" element={<ViewItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
