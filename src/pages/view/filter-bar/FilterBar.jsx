// import React from 'react'
import Input from '../../../common/input/input.component';
import Select from '../../../common/Select/Select';
import { CATEGORIES } from '../../../data/category';
import CheckBox from '../../../common/check-box/check-box.component';
import './filterBar.css';

/**
 * Renders a filters bar.
 * @param {{
 *  searchTerms: string;
 *  searchCategoryFromURL: string[];
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */

const FilterBar = (props) => {
  return (
    <div className="filter-group">
      <Input
        type="search"
        value={props.searchFromURL}
        onChange={e => {
          const newParams = new URLSearchParams(props.params);
          const inputValue = e.target.value;

          if (inputValue) {
            newParams.set('search', inputValue);
          } else {
            newParams.delete('search');
          }
          props.setParam(newParams);
        }}
        placeholder="Search"
      />
     <div className="category">
      {console.log(CATEGORIES)}
        {CATEGORIES.map(categ => 
           <CheckBox
           key={categ}
           label={categ}
           checked={props.searchCategoryFromURL.includes(categ)}
           onChange={(e) => {
            const newParams = new URLSearchParams(props.params);
            const oldItems = newParams.getAll('category');

            if (e.target.checked) {
              newParams.append('category', categ);
            } else {
              const filteredCategories = oldItems.filter(oItem => oItem !== categ);

              if (filteredCategories.length) {
                newParams.delete('category');
                filteredCategories.forEach((v) => newParams.append('category', v));
              } else {
                newParams.delete('category');
              }
            }

            props.setParam(newParams);
          }}

           />
        )

        }
     </div>

    </div>
  );
};

export default FilterBar;