import { useState, useEffect, useContext } from 'react';
import ItemCard from '../../components/item-card/item-card.component';
import Loading from '../../components/common/loading/loading.component';
import './view.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FilterBar from './filter-bar/filter-bar.component';
import { UserContext } from '../../App';
// import NotFound from '../not-found/not-found.component';


const getMenu = () => JSON.parse(localStorage.getItem('menu') || '[]');

const ViewPage = (props) => {
    const navigate = useNavigate();
    const [menu] = useState(getMenu);
    const [loading, setLoading] = useState(true);
    const [params, setParams] = useSearchParams();
    const userContext = useContext(UserContext);

    const searchTerms = params.get('searchTerms') || '';
    const categoryFilters = params.getAll('category') || '';
    const priceMin = Number(params.getAll('priceMin')) || 0;
    const priceMax = Number(params.getAll('priceMax')) || 0;

    useEffect(() => {
        if (!userContext.user)
            navigate('/login');
    }, []);

    const filteredMenu = menu
        .filter(
            item => {
                let match = (
                    (item.name.toLowerCase().includes(searchTerms.trim().toLowerCase()))
                    || (item.description.toLowerCase().includes(searchTerms.trim().toLowerCase()))
                    || (item.ingredients.some(element => element.toLowerCase().includes(searchTerms.trim().toLowerCase())))
                );

                if (categoryFilters) {
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
                            return <ItemCard {...item} key={item + index} />;
                        })
                    }
                    {len === 0 &&
                        <div className='no-results'>
                            <h2>
                                <img
                                    alt=''
                                    src="https://64.media.tumblr.com/718c1fbf3a9359e96ddd1174a41a2720/tumblr_opfl1y9hKn1tile93o1_540.gif"
                                />
                                <br />
                                sorry, nothing was found
                            </h2>
                        </div>
                    }


                </div>}
        </div>
    );
};

export default ViewPage;