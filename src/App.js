/* never forget your friend (alt+shift+f) */

// Here we import the components
import AddPage from "./pages/menuPageContainer/page.container";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.container";
import NotFound from "./pages/not-found/not-found.component";
import ViewItemPage from "./pages/view-item/view.item";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//A function App will render the components
function App() {

  return (
    <div className="pages-container">
      <div className="consistancy-between-pages">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;

