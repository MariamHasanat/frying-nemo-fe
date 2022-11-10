import './not-found.css';
import Nt from '../../assets/illustrations/404-page.gif';

const NotFound = (props) => {
  return (
    <div className="not-found-page">
      <div className="main">
        <img src= {Nt} alt="not-found" />

      </div>
    </div>
  );
};

export default NotFound;
