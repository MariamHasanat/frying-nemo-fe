import Header from "./components/common/header/header.component";
import View from "./pages/view/view";
import '../src/pages/add/add.component';
import AddPage from "../src/pages/add/add.component";
import Test from "./pages/test/test.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/add" element={<AddPage />} />
          <Route path="/view" element={<View />} />
          /**catch all route */
          <Route path="/*" element={<Test />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
