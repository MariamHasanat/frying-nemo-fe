import "./header.css";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="left-header">
        <div className="logo"></div>
        <span className="resturant-name">Frying Nemo</span>
      </div>
      <div className="right-header">
        <nav>
          <a
            className={window.location.pathname === "/add" ? "active-nav-btn" : "nav-btn"}
            href="/add"
            
          >
            Add
          </a>
          <a
            className={window.location.pathname === "/view" ? "active-nav-btn" : "nav-btn"}
            href="/view"
            
          >
            View
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
