import "./view.css";
import { useState } from "react";
import Cards from "../cards/cards.component";

const ViewPage = (props) => {
  return (
    <div>
      <h1>view Page</h1>
      <Cards />
    </div>
  );
};

export default ViewPage;
