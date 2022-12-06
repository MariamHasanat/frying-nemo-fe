import React from 'react';
import './filter-bar.css';
import Input from '../../../components/common/input/input.component';
import { CATEGORIES } from '../../../data/constant';
import CheckBox from '../../../components/common/checkbox/checkbox.component';
import useParams from '../../../hooks/params.hooks';

/**
 * Renders a filters bar.
 * @param {}
 */
const FilterBar = () => {
  
  const {myParams , setParam} = useParams();
  return (

    <div className="filter-bar">
      <Input
        type="search"
        label="Search for Item"
        value={myParams.searchTermsFromURL || ''} 
        onChange={e =>setParam ('searchTerms', e.target.value)}
        placeholder="Search"
      />
      <div className="categories">
        {CATEGORIES.map(cat => (
          <CheckBox
            key={cat}
            value={cat}
            label={cat}
            checked={myParams.categoriesFromURL.includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [myParams.categoriesFromURL, cat]
                : myParams.categoriesFromURL.filter(category => category !== cat);

              setParam('category', updated);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
