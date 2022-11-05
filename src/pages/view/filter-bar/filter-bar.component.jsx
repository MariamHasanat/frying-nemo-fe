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
                    .map(item => <Checkbox label={item} key={'item_' + item} />
                    )
                }
            </div>
        </div>
    );
};

export default FilterBar;
