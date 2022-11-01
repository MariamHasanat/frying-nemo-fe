import { useState } from 'react';
import ItemCard from './item-card/item-card.component';
import Loading from '../../components/common/loading/loading.component';
import './view.css';
import { useSearchParams } from 'react-router-dom';
import FilterBar from './filter-bar/filter-bar.component';

const getMenu = () => JSON.parse(localStorage.getItem('menu') || '[]');

const ViewPage = (props) => {
    const [menu] = useState(getMenu);
    const [loading, setLoading] = useState(true);
    const [params, setParams] = useSearchParams();

    const searchTerms = params.get('searchTerms') || '';
    console.log('searchTerms:', searchTerms);

    const filteredMenu = menu
        .filter(
            item => {
                return (item.name.toLowerCase().includes(searchTerms.trim().toLowerCase()))
                    || (item.description.toLowerCase().includes(searchTerms.trim().toLowerCase()))
                    || (item.ingredients.some(element => element.toLowerCase().includes(searchTerms.trim().toLowerCase())));
            });

    setTimeout(() => {
        setLoading(false);
    }, 1000);


    return (
        <div className='view-page'>
            <h1>view items</h1>
            <FilterBar 
                searchTerms={searchTerms} 
                params={params}
                setParams={setParams}
            />

            {loading
                ? <Loading />
                : <div className="main">
                    {filteredMenu.map((item, index) => {
                        return <ItemCard {...item} key={item + index} />;
                    })}
                </div>}
        </div>
    );
};

export default ViewPage;