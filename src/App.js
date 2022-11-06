import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";
import Login from "./pages/login/login.component";
import './index.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login/>} replace/>
                    <Route path="/" element={<Navigate to='/view'/>} replace/>
                    <Route path="/add" element={<AddPage />} />
                    <Route path="/view" element={<ViewPage />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/view/:id" element={<ViewItemPage />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;