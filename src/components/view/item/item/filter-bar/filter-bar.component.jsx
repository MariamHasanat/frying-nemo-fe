import React from "react";
import Input from "../../../../common/input/input.component";
<<<<<<< HEAD
import './filter-bar.css';
import CATEGORIES from "../../../../data/constant";
import CheckBox from "../../../../common/toggle-bullets/check-box.component";



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
=======
import CheckBox from "../../../../common/check-box/check-box.component";
import CATEGORIES from "../../../../../data/constants";

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
      <div>
      {CATEGORIES.map(e => (
        <CheckBox
          key={e}
          label={e}
          checked={props.categories.includes(e)}
          onChange={e => {
            const updated = e.target.checked
              ? [...props.categories, e]
              : props.categories.filter(category => category !== e);

            props.setParam('category', updated);
          }}
        />
      ))}
      </div>

    </div>
  );
};

export default FilterBar;


>>>>>>> faaaeb0c0852ef2f9ceb9ef1565401db2796dff2
