import Header from "./components/common/header/header.component";
import View from "./pages/view/view";
import '../src/pages/add/add.component';
import AddPage from "../src/pages/add/add.component";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ViewItem from "./pages/view-item/view-item.component";
function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/add" element={<AddPage />} />
          <Route path="/view" element={<View />} />
          <Route path="/view/:id" element={<ViewItem />} />
          <Route path="/*" element={<Navigate to="/add" />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
