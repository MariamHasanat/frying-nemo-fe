import AddPage from "./pages/add/add.component";
import './common.css';
import Addveiw from "./pages/veiw/veiw.component";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <BrowserRouter> 
        <Header  />
        <Routes>
          <Route path="/*" element={<NotFound/>} /> 
          <Route path="/add" element={<AddPage/>} /> 
          <Route path="/view" element={<Addveiw/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 