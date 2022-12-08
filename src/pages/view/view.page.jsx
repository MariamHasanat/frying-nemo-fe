import { useState, useEffect, useContext } from 'react';
import ItemCard from '../../components/item-card/item-card.component';
import Loading from '../../components/common/loading/loading.component';
import './view.css';
import { useSearchParams } from 'react-router-dom';
import FilterBar from './filter-bar/filter-bar.component';
import { CartContext } from '../../components/providers/cart-provider.component';
import Jiji from '../../components/common/jiji-the-cat/jiji.component';
import { getAllItems } from '../../services/fetchItem';
import useFilterItems from '../../hooks/filterItems.hook';
import Checkbox from '../../components/common/checkbox/checkbox.component';
import useToggle from '../../hooks/toggle.hook';


const ViewPage = (props) => {
    const [isTourist, setIsTourist] = useToggle();
    
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [params, setParams] = useSearchParams();
    const cartContext = useContext(CartContext);


    const searchTerms = params.get('searchTerms') || '';
    const categoryFilters = params.getAll('category') || '';
    const priceMin = Number(params.getAll('priceMin')) || 0;
    const priceMax = Number(params.getAll('priceMax')) || 0;

    const getMenu = async () => {
        const items = await getAllItems();
        console.log(items);
        setMenu(items);
        setLoading(false);
    };

    useEffect(() => {
        getMenu();
    }, []);

    const setParam = (name, value) => {
        const newParams = new URLSearchParams(params);

        newParams.delete(name);

        if (Array.isArray(value)) {
            value.forEach(item => newParams.append(name, item));
        } else if (value.trim()) {
            newParams.set(name, value.trim());
        }

        setParams(newParams);
    };


    const filteredMenu = useFilterItems(menu, isTourist);

    const len = filteredMenu.length;

    const getItemQuantity = (id) => {
        const currentItem = cartContext.cart?.find(item => item.meal.id === id);
        if (currentItem) {
            return currentItem.quantity;
        }
        return 0;
    };

    return (
        <div className='view-page'>
            <h1>view items
                <Checkbox label='Are you a Tourist?' checked={isTourist} onChange={setIsTourist} />
            </h1>

            <FilterBar

                searchTerms={searchTerms}
                params={params}
                setParams={setParam}
                categoryFilters={categoryFilters}
                priceMin={priceMin}
                priceMax={priceMax}
            />

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
            {len === 0 &&
                <Jiji message="sorry, nothing was found" />
            }

        </div>
    );
};

export default ViewPage;