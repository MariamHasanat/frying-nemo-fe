import React from 'react';
import './filter-bar.css';
import Input from '../../common/input/input.component';
import { CATEGORIES } from '../../../data/constants';
import ToggleBullet from '../../common/toggle-bullets/toggle-bullet.component';

const FilterBar = (props) => {

    const handleFilterChange = (filter, valueOfInput) => {
        const newP = new URLSearchParams(props.params);
        if (valueOfInput)
            newP.set(filter, valueOfInput);
        else
            newP.delete(filter);
        props.setParam(newP);
    };
    return (
        <div className='filter-bar'>
            <Input
                label='Search For Item'
                name='Search'
                value={props.searchParFromURL}
                type="search"
                placeholder={'Search'}
                onChange={(e) => { handleFilterChange('searchTerms', e.target.value); }}
            />
            <div className='categories-in-view-page'>
                {
                    CATEGORIES.map((item, index) => {
                        return <ToggleBullet
                            name={item}
                            key={index}
                            useParam={props.useParam}
                        />;
                    })
                }
            </div>
        </div>
    );
};

export default FilterBar;