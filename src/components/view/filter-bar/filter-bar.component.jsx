import './filter-bar.css';
import Input from "../../common/input/input-component";
import Select from '../../common/select/select-component';
import CATEGORIES from '../../../data/categories';
import CheckBox from '../../common/toggle-bullets/checkbox.component';


const FilterBar = (props) => {
  return (
    <div className="filter-bar">
      <Input
        type="search"
        label="Search for Item"
        value={props.searchTerms}
        onChange={e => props.setParam('searchTerms', e.target.value)}
        placeholder="Search"
      />
      <div className="categories">
        {CATEGORIES.map(cat => (
          <CheckBox
            key={cat}
            label={cat}
            checked={props.categoryFromURL.includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...props.categoryFromURL, cat]
                : props.categoryFromURL.filter(category => category !== cat);

              props.setParam('categoryFromURL', updated);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;

