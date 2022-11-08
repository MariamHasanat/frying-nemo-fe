import Input from '../../common/input/input.component';
import CheckBox from '../../common/check-box/check-box.component';
import { CATEGORIES } from '../../../data/data';


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
            value={cat}
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
