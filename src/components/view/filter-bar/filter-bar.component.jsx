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
      <Input
        type="number"
        value={props.minValue}
        onChange={e => props.setParam('minValue', e.target.value)}
        placeholder="Min Value"
      />
      <Input
        type="number"
        value={props.maxValue}
        onChange={e => props.setParam('maxValue', e.target.value)}
        placeholder="Max Value"
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

