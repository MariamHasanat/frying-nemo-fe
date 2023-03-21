import React from 'react';
import './filter-bar.css';

import { CATEGORIES } from '../../../data/constants';
import Input from '../../common/input/input.component';
import ToggleBullet from '../../common/toggle-bullets/toggle-bullet.component';
import useParams from '../../../hooks/view/params.hook';

const FilterBar = () => {

    const { myParams, setParam } = useParams();

    return (
        <div className='filter-bar'>
            <Input
                className='search-terms'
                label='Search For Item'
                name='Search'
                value={myParams.searchParFromURL}
                type="search"
                placeholder={'Search'}
                onChange={(e) => { setParam('searchTerms', e.target.value); }}
            />
            {/* <Input
                className='price-filter'
                type={'number'}
                label={'Min'}
                onChange={(e) => {
                    const min = e.target.value;
                    props.setMin(min);
                }}
            />
            <Input
                className='price-filter'
                type={'number'}
                label={'Max'}
                onChange={(e) => {
                    const max = e.target.value;
                    props.setMax(max);
                }}
            /> */}
            <div className='categories-in-view-page'>
                {
                    CATEGORIES.map((item, index) => {
                        return <ToggleBullet
                            name={item}
                            key={index}
                            useParam={setParam}
                        />;
                    })
                }
            </div>
        </div>
    );
};

export default FilterBar;