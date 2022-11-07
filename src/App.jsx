import AddPage from "./pages/add/add.component";
import ViewPage from "./components/ViewPage/ViewPage";
import NotFoundPage from "./components/notfound/NotFound ";
import Header from "./components/core/header/header.componet";
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom'
import { useState } from "react";
import ViewItemPage from "./pages/view-item/view-item.component";
import LoginPage from "./pages/login/login.compent";

function App() {

  const [user, setUser] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Header user={user}  />
        <div className="flex"> 
        <Routes>

            <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
            <Route path="/add" element={<AddPage user={user}>></AddPage>} ></Route>
            <Route path="/" element={<Navigate to="/view"></Navigate>} ></Route>
            <Route path="/view" element={<ViewPage user={user}>></ViewPage>}></Route>
            <Route path="/view/:id" element={<ViewItemPage></ViewItemPage>}></Route>
            <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
