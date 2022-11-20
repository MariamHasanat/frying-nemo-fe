import AddPage from "./pages/add/add.component";
import ViewPage from "./components/ViewPage/ViewPage";
import NotFoundPage from "./components/notfound/NotFound ";
import Header from "./components/core/header/header.componet";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Guard from "./components/core/Guard/Guard-component";
import ViewItemPage from "./pages/view-item/view-item.component";
import LoginPage from "./pages/login/login.compent";
import React, { useReducer } from "react";
import Provider from "./common/Provider/Provider-commponet";
import { reduce, initializationState } from "./reducers/reduce";
export const UserContext = React.createContext(null);


function App() {

  const [cart, dispatch] = useReducer(reduce, initializationState);
  console.log(reduce);
  return (
    <div>
      <Provider>
        <BrowserRouter>
          < Header cart={cart} />
          <div className="flex">

            <Routes>
              <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
              <Route path="/add" element={<Guard Allowed={["ADMIN"]}><AddPage ></AddPage></Guard>} ></Route>
              <Route path="/" element={<Navigate to="/view"></Navigate>} ></Route>
              <Route path="/view" element={<ViewPage cart={cart} dispatch={dispatch} ></ViewPage>}></Route>
              <Route path="/view/:id" element={<ViewItemPage cart={cart} dispatch={dispatch} ></ViewItemPage>}></Route>
              <Route path="/login" element={<LoginPage />} />
            </Routes>

          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
