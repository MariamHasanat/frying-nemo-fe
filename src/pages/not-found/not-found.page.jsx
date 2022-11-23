import './not-found.css';
import notFound from '../../assets/images/404.svg';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <img src={notFound} alt="404" />
        </div>
    );
};

export default NotFound;
