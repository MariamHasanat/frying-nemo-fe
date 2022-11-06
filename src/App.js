import AddPage from "./pages/add/add.component";
import ViewPage from "./components/ViewPage/ViewPage";
import NotFoundPage from "./components/notfound/NotFound ";
import Header from "./components/core/header/header.componet";
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom'
import ViewItemPage from "./pages/view-item/view-item.component";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="flex"> 
        <Routes>
   
            <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
            <Route path="/add" element={<AddPage></AddPage>} ></Route>
            <Route path="/" element={<Navigate to="/view"></Navigate>} ></Route>
            <Route path="/view" element={<ViewPage></ViewPage>}></Route>
            <Route path="/view/:id" element={<ViewItemPage></ViewItemPage>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
