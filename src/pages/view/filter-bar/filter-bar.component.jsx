import './filter-bar.css';
import Input from '../../../components/common/input/input.component';
import FilterCheckbox from '../../../components/common/filter-checkbox/filter-checkbox.component';
import { CATEGORIES } from '../../../data/constants';

const FilterBar = (props) => {
    return (
        <div className='filter-group'>
            <Input
                placeholder='Search'
                type="search"
                value={props.searchTerms}
                label="Search"
                onChange={e => props.setParams('searchTerms', e.target.value)}
            />

            <div className="category-checkboxes">
                {CATEGORIES
                    .map(item =>
                        <FilterCheckbox
                            value={item}
                            label={item}
                            key={'item_' + item}
                            checked={props.categoryFilters.includes(item)}
                            onChange={e => {
                                const updated = e.target.checked
                                  ? [...props.categoryFilters, item]
                                  : props.categoryFilters.filter(category => category !== item);
                  
                                props.setParams('category', updated);
                  
                            }}
                        />
                    )
                }
            </div>

            <div className='priceFilters'>
                <label>Price Filters</label>
                <div className="inputs">
                    <Input
                        placeholder='min'
                        type="number"
                        onChange={e => {
                            const newParams = new URLSearchParams(props.params);
                            const val = e.target.value;
                            if (val)
                                newParams.set('priceMin', val);
                            else
                                newParams.delete('priceMin');
                            props.setParams(newParams);
                        }}
                    />
                    <Input
                        placeholder='max'
                        type="number"
                        onChange={e => {
                            const newParams = new URLSearchParams(props.params);
                            const val = e.target.value;
                            if (val)
                                newParams.set('priceMax', val);
                            else
                                newParams.delete('priceMax');
                            props.setParams(newParams);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
