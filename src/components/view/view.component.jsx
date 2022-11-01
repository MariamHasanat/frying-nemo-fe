import "./view.css";
import Cards from "../cards/cards.component";

const ViewPage = (props) => {
  return (
    <div>
      <h1 className="view-page-header">view Page</h1>
      <Cards />
    </div>
  );
};

export default ViewPage;
