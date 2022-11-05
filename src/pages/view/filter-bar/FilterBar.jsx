// import React from 'react'
import Input from '../../../common/input/input.component';
// import Select from '../../../common/Select/Select';
import { CATEGORIES } from '../../../data/category';
import CheckBox from '../../../common/check-box/check-box.component';
import './filterBar.css';

/**
 * Renders a filters bar.
 * @param {{
 *  search: string;
 *  categories: string[];
 *  min: string;
 *  max: string;
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */
const FilterBar = (props) => {
  return (
    <div className="filter-group">
      <Input
        type="search"
        value={props.search}
        onChange={e => props.setParam('search', e.target.value)}
        placeholder="Search"
      />
      <Input
        type="number"
        label="Min Price : "
        value={props.min}
        onChange={e => props.setParam('min', e.target.value)}
        placeholder="Minimum price"
      />
      <Input
        type="number"
        label="Max Price : "
        value={props.max}
        onChange={e => props.setParam('max', e.target.value)}
        placeholder="Maximum price"
      />
      <div className="category">
        {CATEGORIES.map(category => (
          <CheckBox
            key={category}
            label={category}
            checked={props.categories.includes(category)}
            onChange={e => {
              const updatedList = e.target.checked
                ? [...props.categories, category]
                : props.categories.filter(t => t !== category);

              props.setParam('category', updatedList);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;