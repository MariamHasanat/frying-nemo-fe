import { useState } from "react";
import Form from "./components/add/form/form.component";
import Handel from "./components/header/header";
import AddPage from "./pages/add/add/add.component";

import NotFound from "./pages/add/not-found/not-found";
import View from "./pages/add/view/view";

function App() {
  const[curentpage,setCurentPage]=useState('add')
  const changepage=(newpage)=>{
   setCurentPage(newpage);
  }
  return (
    <div>
     <Handel onnavigate={changepage} curentpage={curentpage}
      />
      
      {curentpage==='add'&&<AddPage onnavigate={changepage}/>}
      {curentpage==='view'&&<View/>}
      {curentpage==='not-found'&&<NotFound/>}
    </div>
  );
}

export default App;
