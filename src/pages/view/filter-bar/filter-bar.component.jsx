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

            <Select
                name="category"
                defaultValue=""
                label='Category'
                onChange={e => {
                    const newParams = new URLSearchParams(props.params);
                    const searchVal = e.target.value;
                    if (searchVal)
                        newParams.set('categoryFilters', searchVal);
                    else
                        newParams.delete('categoryFilters');
                    props.setParams(newParams);
                }}
            >
                {CATEGORIES.map((item) => {
                    return <option key={item} value={item}>{item}</option>;
                })}
                <option value="">All</option>
            </Select>

            {<Checkbox label="hello"/>}
        </div>
    );
};

export default FilterBar;
