import './not-found.css';
import notFound from '../../assets/404.svg'
const NotFound = (props) => {
  return (
    <div className="not-found-page">
      <img src={notFound} alt="404" />
    </div>
  );
};

export default NotFound;
