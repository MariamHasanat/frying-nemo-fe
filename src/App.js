import { useState } from "react";
import AddPage from "./pages/add/add.component";
import View from "./pages/view/view";
import Header from "./core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";


function App() {

    const pathName = window.location.pathname;
    let page = null;
    switch (pathName) {
        case '/add':
            page = <AddPage />;
            break;
        case '/view':
            page = <View />;
            break;
        default:
            page = <NotFound />;
            break;
    }
    
    return (
        <div>
            <Header />
            {page}

        </div>
    );
}

export default App;
