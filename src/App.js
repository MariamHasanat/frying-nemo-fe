import AddPage from "./pages/add/add.component";
import ViewPage from "./common/view/view.component";
import Header from './common/header/header.component';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from "./pages/add/not_found/not-found";
import ViewItemPage from "./common/view/view-item/item.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/add/*" element={<AddPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/view/:id" element={ <ViewItemPage/>} />
          <Route path="/*" element={ <NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

