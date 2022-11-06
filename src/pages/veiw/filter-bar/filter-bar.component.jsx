import React from 'react';
import './filter-bar.css';
import Input from '../../../components/common/input/input.component';
import { CATEGORIES } from '../../../data/constant';
import CheckBox from '../../../components/common/checkbox/checkbox.component';

/**
 * Renders a filters bar.
 * @param {{
 *  searchTerms: string;
 *  categories: string[];
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */
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
