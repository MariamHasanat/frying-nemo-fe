

import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/add/view/view.component";
import NotFound from "./pages/add/not-found/not-found.component";
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes >
            <Route path="/add" element={<AddPage />}></Route>
            <Route path="/view" element={<ViewPage />}></Route>
            <Route path="/*" element={<NotFound/>}></Route>
            
          </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;


