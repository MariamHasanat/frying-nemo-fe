import AddPage from "./pages/add/add.component";
import './common.css';
import Addveiw from "./pages/veiw/veiw.component";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import AddveiwItem from "./pages/veiwItem/veiw-item.component";


function App() {

  return (
    <div>
      <BrowserRouter> 
        <Header  />
        <Routes>
          <Route path="/" element={<Navigate to ="/view" replace/>} /> 
          <Route path="/add" element={<AddPage/>} /> 
          <Route path="/view-details/:id" element={<AddveiwItem />} />
          <Route path="/view" element={<Addveiw/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 