import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import ViewDetailsPage from "./pages/view-details/view-details.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/login/login.component";
import UserProvider from "./components/core/providers/user-provider.component";

function App() {

  return (
    <div>
    <UserProvider>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/view/:id" element={<ViewDetailsPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;