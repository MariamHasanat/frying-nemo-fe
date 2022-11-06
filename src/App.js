import { useState } from "react";
import AddPage from "./pages/add/add.component";
import NotFoundPage from "./pages/not-found/notfound-component";
import ViewPage from "./pages/view/view.component";
import Header from "./components/core/header/header.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import LoginPage from "./pages/login/login.component";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/view" replace />} />
          <Route
            path="/login"
            element={<LoginPage user={user} setUser={setUser} />}
          />
          <Route path="/add" element={<AddPage user={user} />} />
          <Route path="/view" element={<ViewPage user={user} />} />
          <Route path="/view-details/:id" element={<ViewItemPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
