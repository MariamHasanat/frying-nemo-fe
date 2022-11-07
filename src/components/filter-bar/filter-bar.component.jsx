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
        value={props.searchTerms}
        onChange={e => props.setParam('searchTerms', e.target.value)}
        placeholder='Search'
      />

<span className='min-price'><Input
          type={"number"}
          label='Minimum Price'
          value={props.minPrice}
          onChange={e => props.setParam("Min", e.target.value)}
        ></Input>
        </span>

        <span className='max-price'><Input
          type={"number"}
          label="Maximum Price"
          value={props.maxPrice}
          onChange={e => props.setParam("Max", e.target.value)}
        >
        </Input></span>


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