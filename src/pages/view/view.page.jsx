import { useState, useEffect, useContext } from 'react';
import useToggle from '../../hooks/toggle.hook';
import useFilterItems from '../../hooks/filterItems.hook';
import { CartContext } from '../../components/providers/cart-provider.component';
import { getAllItems } from '../../services/fetchItem';

import ItemCard from '../../components/item-card/item-card.component';
import FilterBar from './filter-bar/filter-bar.component';
import Jiji from '../../components/common/jiji-the-cat/jiji.component';
import Checkbox from '../../components/common/checkbox/checkbox.component';
import Loading from '../../components/common/loading/loading.component';

import './view.css';

const ViewPage = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const cartContext = useContext(CartContext);

    const getMenu = async () => {
        const items = await getAllItems();
        console.log(items);
        setMenu(items);
        setLoading(false);
    };

    useEffect(() => {
        getMenu();
    }, []);
    
    const filteredMenu = useFilterItems(menu);
    
    const getItemQuantity = (id) => {
        const currentItem = cartContext.cart?.find(item => item.meal.id === id);
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
                        filteredMenu.map((item, index) => {
                            return <ItemCard
                                item={item}
                                key={item + index}
                                itemQuantity={getItemQuantity(item.id)}
                            />;
                        })
                    }
                </div>
            }
            {filteredMenu.length === 0 &&
                <Jiji message="sorry, nothing was found" />
            }

        </div>
    );
};

export default ViewPage;