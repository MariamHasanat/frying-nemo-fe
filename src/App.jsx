import AddPage from "./pages/add/add.component";
import Header from "./components/core/header/header.component";
import ViewPage from "./pages/view/view.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route, useParams  } from "react-router-dom";
import ViewDetailsPage from "./pages/view-details/view-details.component";
import LoginPage from "./pages/login/login.component";

function App() {
  const pathname = window.location.pathname.replace('/', '');
  console.debug(pathname)

  return (
    <div style={{ width: `100%` }}>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<LoginPage/>}/>
          <Route path="/add" element={<AddPage/>}/>
          <Route path={"/view"} element={<ViewPage/>}/>
          <Route path={"/view/:id"} element={<ViewDetailsPage/>}/>
          <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;