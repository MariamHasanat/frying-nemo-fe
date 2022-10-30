import { useState } from 'react';
import ItemCard from './item-card/item-card.component';
import Loading from '../../components/common/loading/loading.component';
import Input from '../../components/common/input/input.component';
import './view.css';

const getMenu = () => JSON.parse(localStorage.getItem('menu') || '[]');

const ViewPage = (props) => {
    const [menu] = useState(getMenu);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState(localStorage.getItem('searchText-ViewPage') || '');

    const setSearchTextAndSaveToLocalStorage = (value) => {
        setSearchText(value);
        localStorage.setItem('searchText-ViewPage', value);
    }
    const filteredMenu = menu
        .filter(
            item => {
                    return (item.name.toLowerCase().includes(searchText.trim().toLowerCase()))
                    || (item.description.toLowerCase().includes(searchText.trim().toLowerCase()))
                    || (item.ingredients.some(element =>  element.toLowerCase().includes(searchText.trim().toLowerCase())))
                });

                setTimeout(() => {
                    setLoading(false);
                }, 1000);


                return (
                    <div className='view-page'>
                        <h1>view items</h1>
                        <Input
                            placeholder='Search'
                            type="search" value={searchText}
                            onChange={e => setSearchTextAndSaveToLocalStorage(e.target.value)}
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