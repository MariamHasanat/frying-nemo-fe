import { useContext } from 'react';
import { CartContext } from '../../components/providers/cart-provider.component';

import ItemCard from '../../components/item-card/item-card.component';
import FilterBar from './filter-bar/filter-bar.component';
import Jiji from '../../components/common/jiji-the-cat/jiji.component';
import Loading from '../../components/common/loading/loading.component';

import './view.css';
import useGetItems from '../../hooks/get-items.hook';

const ViewPage = () => {
    const cartContext = useContext(CartContext);
    const {menu, loading } = useGetItems()

    const getItemQuantity = (id) => {
        const currentItem = cartContext.cart?.find(item => item.meal._id === id);
        if (currentItem) {
            return currentItem.quantity;
        }
        return 0;
    };

    return (
        <div className='view-page'>
            <FilterBar />
            {loading
                ? <Loading />
                : <div className="main">
                    {
                        menu.map((item, index) => {
                            return <ItemCard
                                item={item}
                                key={item + index}
                                itemQuantity={getItemQuantity(item._id)}
                            />;
                        })
                    }
                </div>
            }
            {
                menu.length === 0 &&
                <Jiji message="sorry, nothing was found" />
            }

        </div>
    );
};

export default ViewPage;