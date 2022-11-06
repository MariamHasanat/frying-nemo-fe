import AddPage from "./pages/add/add.component";
import View from "./pages/view/view";
import Header from "./core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewItemPage from "./pages/view-item-page/view-item-page";


function App() {

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/add" element={<AddPage />} />
                    <Route path="/view" element={<View />} />
                    <Route path="/view-details/:id" element={<ViewItemPage />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
