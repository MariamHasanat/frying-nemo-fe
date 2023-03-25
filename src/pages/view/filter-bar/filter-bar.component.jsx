import './filter-bar.css';
import Input from '../../../components/common/input/input.component';
import FilterCheckbox from '../../../components/common/filter-checkbox/filter-checkbox.component';
import { CATEGORIES } from '../../../data/constants';
import useParam from '../../../hooks/setParam.hook'
const FilterBar = () => {

    const [myParams, setParam] = useParam();
    return (
        <div className='filter-group'>
            <Input
                placeholder='Search'
                type="search"
                value={myParams.searchTerms}
                label="Search"
                onChange={e => setParam('searchTerms', e.target.value)}
            />

            <div className="category-checkboxes">
                {CATEGORIES
                    .map(item =>
                        <FilterCheckbox
                            value={item}
                            label={item}
                            key={'item_' + item}
                            checked={myParams.categoryFilters.includes(item)}
                            onChange={e => {
                                const updated = e.target.checked
                                    ? [...myParams.categoryFilters, item]
                                    : myParams.categoryFilters.filter(category => category !== item);

                                setParam('category', updated);

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
                        onChange={e => setParam('priceMin', e.target.value)}
                    />
                    <Input
                        placeholder='max'
                        type="number"
                        onChange={e => setParam('priceMax', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
