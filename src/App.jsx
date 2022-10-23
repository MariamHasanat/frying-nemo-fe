import AddPage from "./pages/add/add.component";
import Header from "./components/core/header/header.component";
import ViewPage from "./pages/view/view.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  const pathname = window.location.pathname.replace('/', '');
  console.debug(pathname)

  return (
    <div style={{ width: `100%` }}>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddPage/>}/>
          <Route path="/view" element={<ViewPage/>}/>
          <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;