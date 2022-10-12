import ItemCard from '../../components/item-card/item-card.component';
import './view.css';

const ViewPage = (props) => {
    return (
        <div className='view-page'>
            <h1>view items</h1>
            <div className="main">
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </div>
        </div>
    );
};

export default ViewPage;