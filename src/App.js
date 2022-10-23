import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
