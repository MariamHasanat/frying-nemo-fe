import { useState, useEffect, useContext } from 'react';
import ItemCard from '../../components/item-card/item-card.component';
import Loading from '../../components/common/loading/loading.component';
import './view.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FilterBar from './filter-bar/filter-bar.component';
import { UserContext } from '../../components/providers/user-provider.component';
import { CartContext } from '../../components/providers/cart-provider.component';
import Jiji from '../../components/common/jiji-the-cat/jiji.component';
import { getAllItems } from '../../services/fetchItem';


const ViewPage = (props) => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [params, setParams] = useSearchParams();
    const userContext = useContext(UserContext);
    const cartContext = useContext(CartContext);

    const searchTerms = params.get('searchTerms') || '';
    const categoryFilters = params.getAll('category') || '';
    const priceMin = Number(params.getAll('priceMin')) || 0;
    const priceMax = Number(params.getAll('priceMax')) || 0;

    const getMenu = async () => {
        const items = await getAllItems();
        console.log(items);
        setMenu(items);
    };

    useEffect(() => {
        getMenu();
    }, []);

    const filteredMenu = menu
        .filter(
            item => {
                let match = (
                    (item.name.toLowerCase().includes(searchTerms.trim().toLowerCase()))
                    || (item.description.toLowerCase().includes(searchTerms.trim().toLowerCase()))
                    || (item.ingredients.some(element => element.toLowerCase().includes(searchTerms.trim().toLowerCase())))
                );

                if (categoryFilters.length) {
                    match = match && (categoryFilters.includes(item.category));
                }
                if (priceMin && priceMax) {
                    match = match && (item.price >= priceMin && item.price <= priceMax);
                }
                else if (priceMin) {
                    match = match && (item.price >= priceMin);
                }
                else if (priceMax) {
                    match = match && (item.price <= priceMax);
                }

                return match;
            });

    setTimeout(() => {
        setLoading(false);
    }, 1000);

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
            <h1>view items</h1>
            <FilterBar
                searchTerms={searchTerms}
                params={params}
                setParams={setParams}
                categoryFilters={categoryFilters}
                priceMin={priceMin}
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