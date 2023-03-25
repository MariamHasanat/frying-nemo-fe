import Loading from '../../components/common/loading/loading.component';
import './view-item.css';
import { useState, useEffect, useContext } from 'react';
import ItemCard from '../../components/item-card/item-card.component';
import { useParams, useNavigate } from 'react-router-dom';
import NotFound from '../not-found/not-found.page';
import { getItem } from '../../services/items';
import { CartContext } from '../../components/providers/cart-provider.component';

const ViewItemPage = (props) => {
    const [loading, setLoading] = useState(true);
    const [currentItem, setCurrentItem] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    const cartContext = useContext(CartContext);

    const getCurrentItem = async () => {
        const item = await getItem(params.id);
        if (item) setCurrentItem(item);
        
        else navigate("/404", { replace: true });
        
        setLoading(false);
        return item;
    };

    useEffect(() => {
        getCurrentItem();
       
    }, [params.id]);

    const getItemQuantity = (id) => {
        const currentItem = cartContext.cart?.find(item => item.meal.id === id);
        if (currentItem) {
            return currentItem.quantity;
        }
        return 0;
    };

    return (
        <div className='view-item-page'>
            {loading
                ? <Loading />
                : (
                    <>
                        <h2>One-Item-ViewPage</h2>
                        {currentItem
                            ? <ItemCard
                                item={currentItem}
                                itemQuantity={getItemQuantity(currentItem.id)}
                            />
                            : <NotFound />
                        }
                    </>
                )
            }
        </div>
    );
};

export default ViewItemPage;