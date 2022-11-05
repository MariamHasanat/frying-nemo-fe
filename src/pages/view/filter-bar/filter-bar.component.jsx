import './filter-bar.css';
import Input from '../../../components/common/input/input.component';
import Checkbox from '../../../components/common/checkbox/checkbox.component';
import { CATEGORIES } from '../../../data/constants';
import Select from '../../../components/common/select/select.component';


const FilterBar = (props) => {
    return (
        <div className='filter-group'><Input
            placeholder='Search'
            type="search"
            value={props.searchTerms}
            label="Search"
            onChange={e => {
                const newParams = new URLSearchParams(props.params);
                const searchVal = e.target.value;
                if (searchVal)
                    newParams.set('searchTerms', searchVal);
                else
                    newParams.delete('searchTerms');
                props.setParams(newParams);
            }}
        />

            <div className="category-checkboxes">
                {CATEGORIES
                    .map(item =>
                        <Checkbox
                            value={item}
                            label={item}
                            key={'item_' + item}
                            checked={props.categoryFilters.includes(item)}
                            onChange={e => {
                                const newParams = new URLSearchParams(props.params);
                                const cat = e.target.value;
                                if (e.target.checked) {
                                    newParams.append('category', cat);
                                }
                                else {
                                    const oldCat = props.params.getAll('category');
                                    newParams.delete('category');
                                    const filteredCategories = oldCat.filter(item => item !== cat);
                                    if (filteredCategories.length) {
                                        // newParams.set('category', filteredCategories);    this is wrong!
                                        filteredCategories.forEach(item => newParams.append('category', item));
                                    }
                                }
                                props.setParams(newParams);
                            }}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default FilterBar;
