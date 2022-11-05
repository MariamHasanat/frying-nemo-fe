import Loading from '../../components/common/loading/loading.component';
import './view-item.css';
import { useState, useEffect } from 'react';
import ItemCard from '../view/item-card/item-card.component';
import { useParams } from 'react-router-dom';
import NotFound from '../not-found/not-found.component';

const getItem = (myId) => {
    const items = JSON.parse(localStorage.getItem('menu'));
    return items.filter(item => item.id.toString() === myId)[0] || null;
};
const ViewItemPage = (props) => {
    const [loading, setLoading] = useState(true);
    const [currentItem, setCurrentItem] = useState(null);
    const params = useParams();
    useEffect(() => {
        // setLoading(true);
        const item = getItem(params.id);
        if (item) {
            setCurrentItem(item);
        }
        setLoading(false);
    }, [params.id]);

    return (
        <div className='view-item-page'>
            {loading
                ? <Loading />
                : (
                    <>
                        <h2>One-Item-ViewPage</h2>
                        {currentItem
                            ? <ItemCard {...currentItem} />
                            : <NotFound />}
                    </>
                )
            }
        </div>
    );
};

export default ViewItemPage;