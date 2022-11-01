import React from 'react';
import './filter-bar.css';
import Input from '../../common/input/input.component';
import SelectArea from '../../common/selectarea/selectarea.component';
import { CATEGORIES } from '../../../data/constants';

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
            <SelectArea
                label='Categories'
                name={'categories'}
                value={props.categoryParFromURL}
                required
                onChange={e => handleFilterChange('category', e.target.value)}

            >
                <option selected>All</option>
                {
                    CATEGORIES.map((item) => {
                        return <option key={item} value={item}>{item}</option>;
                    })
                }
            </SelectArea>

        </div>
    );
};

export default FilterBar;