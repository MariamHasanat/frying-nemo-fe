import React from 'react';
import './filter-bar.css';
import Input from '../../common/input/input.component';
import { CATEGORIES } from '../../../data/constants';
import CheckBox from '../../common/check-box/check-box.component';

// TODO: Add types here -brett-
const FilterBar = (props) => {

  const handleFilterChange = (filterName, inputValue) => {
    const newParams = new URLSearchParams(props.params);

    if (inputValue) {
      newParams.set(filterName, inputValue);
    } else {
      newParams.delete(filterName);
    }
    props.setParams(newParams);
  };

  return (
    <div className="filter-bar">
      <Input
        type="search"
        label="Search for Item"
        value={props.searchTermsFromURL}
        onChange={e => handleFilterChange('searchTerms', e.target.value)}
        placeholder="Search"
      />
      <div className="categories">
        {CATEGORIES.map(cat => <CheckBox
          key={cat}
          value={cat}
          label={cat}
          checked={props.categoriesFromURL.includes(cat)}
          onChange={(e) => {
            const newParams = new URLSearchParams(props.params);
            const oldItems = newParams.getAll('category');

            if (e.target.checked) {
              newParams.append('category', cat);
            } else {
              const filteredCategories = oldItems.filter(oItem => oItem !== cat);
              if (filteredCategories.length) {
                newParams.delete('category');
                filteredCategories.forEach((v) => newParams.append('category', v));
              } else {
                newParams.delete('category');
              }
            }

            props.setParams(newParams);
          }}
        />
        )}
      </div>
    </div>
  );
};

export default FilterBar;