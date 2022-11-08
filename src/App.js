/* never forget your friend (alt+shift+f) */

// Here we import the components
import AddPage from "./pages/menuPageContainer/page.container";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.container";
import NotFound from "./pages/not-found/not-found.component";
import ViewItemPage from "./pages/view-item/view.item";
import LoginPage from "./pages/login/login";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//A function App will render the components
function App() {
  const initialUser = JSON.parse(sessionStorage.getItem('user'));

  const [user , setUser] = useState(initialUser);

  const setUserOverride = user => {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <div className="pages-container">
      <div className="consistancy-between-pages">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace/>} />
            <Route path="/login" element={<LoginPage user={user} setUser={setUserOverride} />} />
            <Route path="/add" element={<AddPage user={user} />} />
            <Route path="/view" element={<ViewPage user={user} />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;

