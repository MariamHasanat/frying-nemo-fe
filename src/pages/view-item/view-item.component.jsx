import Loading from '../../components/common/loading/loading.component';
import './view-item.css';
import { useState, useEffect } from 'react';
import ItemCard from '../../components/item-card/item-card.component';
import { useParams, useNavigate } from 'react-router-dom';
import NotFound from '../not-found/not-found.component';
import { getItem } from '../../services/fetchItem';

const ViewItemPage = (props) => {
    const [loading, setLoading] = useState(true);
    const [currentItem, setCurrentItem] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        // setLoading(true);
        const item = getItem(params.id);
        if (item) {
            setCurrentItem(item);
        }
        else {
            navigate("/404", { replace: true });
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
                            : <NotFound />
                        }
                    </>
                )
            }
        </div>
    );
};

export default ViewItemPage;