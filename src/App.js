import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/add" element={<AddPage/>}/>
                    <Route path="/view" element={<ViewPage/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;