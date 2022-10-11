import "./header.css";

const Header = (props) => {
  const tabStyle = () => {
    if (props.pageName == "add") {
      return "add";
    }
  };
  return (
    <div className="header-container">
      <div className="left-header">
        <div className="logo"></div>
        <span className="resturant-name">Frying Nemo</span>
      </div>
      <div className="right-header">
        <button
          className={props.pageName === "add" ? "active-nav-btn" : "nav-btn"}
          onClick={() => props.onNavigate("add")}
        >
          Add
        </button>
        <button
          className={props.pageName === "view" ? "active-nav-btn" : "nav-btn"}
          onClick={() => props.onNavigate("view")}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Header;
