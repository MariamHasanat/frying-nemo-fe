import './filter-bar.css';
import Input from "../../common/input/input-component";
import Select from '../../common/select/select-component';
import CATEGORIES from '../../../data/categories';
import CheckBox from '../../common/toggle-bullets/checkbox.component';


const FilterBar = (props) => {

  const handelFilterChange = (filterName, inputValue) => {
    const newParams = new URLSearchParams(props.params);
    if (inputValue) {
      newParams.set(filterName, inputValue);
    } else {
      newParams.delete(filterName);
    }
    props.setParams(newParams);
  };

  return (
    <div className='filter-bar'>
      <Input
        className='input'
        type="search"
        value={props.searchTerms}
        onChange={(e) => handelFilterChange('searchTerms', e.target.value)}
        placeholder="Search"
      />
      {/* <Select
        className='select'
        name='category'
        label='Category'
        required
        value={props.categoryFromURL}
        onChange={(e) => handelFilterChange('categoryFromURL', e.target.value)}
      >
        <option value="">All</option>
        {CATEGORIES.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select> */}
      <div className="categories">
        {CATEGORIES.map(cat => (
          <CheckBox
            key={cat}
            label={cat}
            checked={props.categories.includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...props.categories, cat]
                : props.categories.filter(category => category !== cat);

              props.setParam('category', updated);
            }}
          />
        ))}
      </div>

    </div>
  );
};
export default FilterBar;