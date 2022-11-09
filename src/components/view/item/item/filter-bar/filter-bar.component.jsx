import React from "react";
import Input from "../../../../common/input/input.component";
import CheckBox from "../../../../common/check-box/check-box.component";
import CATEGORIES from "../../../../../data/constant.js";

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
         <Input
        type="number"
        value={props.min}
        onChange={e => props.setParam('min', e.target.value)}
        placeholder="MinPrice"
      />
      <Input
        type="number"
        value={props.max}
        onChange={e => props.setParam('max', e.target.value)}
        placeholder="MaxPrice"
      />

           <div className="categories">
        {CATEGORIES.map(item => (
          <CheckBox
            key={item}
            label={item}
            checked={props.categories.includes(item)}
            onChange={e => {
              const updated = e.target.checked
                ? [...props.categories, item]
                : props.categories.filter(category => category !== item);

              props.setParam('category', updated);
            }}
          />
        ))}
      </div>




    </div>
  );
};

export default FilterBar;

