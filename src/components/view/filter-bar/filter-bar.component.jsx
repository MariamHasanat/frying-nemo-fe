import React from 'react';
import './filter-bar.css';
import Input from '../../common/input/input.component';
import { CATEGORIES } from '../../../data/constants';
import CheckBox from '../check-box-view-page/check-box.component';

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
        <div className='filterBar'>
            <Input
                label='Search For Item'
                name='Search'
                value={props.searchParFromURL}
                type="search"
                placeholder={'Search'}
                onChange={(e) => { handleFilterChange('searchTerms', e.target.value); }}
            />
            {
                CATEGORIES.map((item, index) => {
                    return <CheckBox
                        name={item}
                        key={index}
                        useParam={props.useParam}
                    />;
                })
            }
        </div>
    );
};

export default FilterBar;