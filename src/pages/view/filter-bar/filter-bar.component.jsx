import React from 'react';
import './filter-bar.css';
import { CATEGORIES } from '../../../data/constant';
import CheckBox from '../../../components/common/toggle-bullets/check-boxes.component';
import Input from '../../../components/common/input/input.component';
/**
 * 
 * @param {{
 * searchTerms: string ;
 * categories: string[];
 * setParams:(name :string , value : string | string[]) => void
 * }} props 
 */

const FilterBar = (props) => {
  return (
    <div className="filter-bar">
      <Input
        type="search"
        label="search for item"
        value={props.searchTerms}
        onChange={e => props.setParams('searchTerms', e.target.value)}
        placeholder="search"
      />
      {
        CATEGORIES.map(cat =>
          <CheckBox key={cat}
            label={cat}
            checked={props.categories.includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...props.categories, cat]
                : props.categories.filter(category => category !== cat);

              props.setParams('category', updated);
            }}
          />
        )
      }
       <Input
          label='min price :'
          type="number"
          onChange={e => props.setParams('min', e.target.value)}
          min={0}
          max={100}

        />
        <Input
          label='max price : '
          type="number"
          onChange={e => props.setParams('max', e.target.value)}
          max={100}
          min={0}

        />

    </div>
  );
};
export default FilterBar;