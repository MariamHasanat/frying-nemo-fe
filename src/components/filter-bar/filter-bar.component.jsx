import React from "react";
import './filter-bar.css';
import Input from "../input/input.component";
import CATEGORIES from "../data/categories";
import Select from "../select/select.component";
import CheckBox from "../check-box/check-box.component";

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
        type='search'
        label='Search for Item'
        value={props.search}
        onChange={e => props.setParam('searchTerms', e.target.value)}
        placeholder='Search'
      />

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
  );
};

export default FilterBar;