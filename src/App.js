import AddPage from "./pages/add/add.component";
import Header from "./components/common/header/header.component";
import ViewPage from "./components/view/view.component";
import ErorrPage from "./components/error/error.compopnent";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ViewItemPage from "./pages/view-item/view-item.component";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/view" element={<ViewPage />} />
          <Route path="/view-item/:id" element={<ViewItemPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/" element={<Navigate to="/view" replace/>} />
          <Route path="/*" element={<ErorrPage />} />
        </Routes>
      </BrowserRouter>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
