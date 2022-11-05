// import React from 'react'
import Input from '../../../common/input/input.component';
// import Select from '../../../common/Select/Select';
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
      <Input
        type="number"
        label="Min Price : "
        value={props.searchFromURL}
        onChange={e => {
          const newParams = new URLSearchParams(props.params);
          const inputValue = e.target.value;

          if (inputValue) {
            newParams.set('search', inputValue);
          } else {
            newParams.delete('search');
          }
       
        }}
        // placeholder="Search"
      />
      <Input
        type="number"
        label="Max Price : "
        value={props.searchFromURL}
        onChange={e => {
          const newParams = new URLSearchParams(props.params);
          const inputValue = e.target.value;

          if (inputValue) {
            newParams.set('search', inputValue);
          } else {
            newParams.delete('search');
          }
         
        }}
        // placeholder="Search"
      />

     <div className="category">
     
        {CATEGORIES.map(categ => 
        (
           <CheckBox
            key={categ}
            label={categ}
            checked={props.searchCategoryFromURL.includes(categ)}
            onChange={e => {
              const updatE = e.target.checked?
                 [...props.searchCategoryFromURL, categ]
                : props.searchCategoryFromURL.filter(t => t !== categ);

              props.setParam('category', updatE);
              // console.log("checked " ,props.searchCategoryFromURL.includes(categ))
            }}

           />)
        )
      }
     </div>

    </div>
  );
};

export default FilterBar;