import Header from "./components/core/header/header.componet";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/notfound/notfound.component";
import ViewPage from "./pages/view/ViewPage.component";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
return(
  <div>
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path="/add" element={<AddPage />}></Route>
          <Route path="/view" element={<ViewPage />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
    </BrowserRouter>
  </div>
)


}
export default App;
