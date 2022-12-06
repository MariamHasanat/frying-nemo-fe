import React from "react";
import './filter-bar.css';
import Input from "../../user-work/input/input.component";
import CATEGORIES from "../data/categories";
import Select from "../../user-work/select/select.component";
import CheckBox from "../../user-work/check-box/check-box.component";
import useParams from "../hooks/params.hook";

/**
 * Renders a filters bar.
 * @param {{
 *  searchTerms: string;
 *  categories: string[];
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */


const FilterBar = () => {
  const { someParams, useParams } = useParams();


  return (
    <div className="filter-bar">
      <Input
        type='search'
        label='Search for Item'
        value={someParams.searchTermsFromURL || ''}
        onChange={e => setParam('searchTerms', e.target.value)}
        placeholder='Search'
      />

      <span className='min-price'><Input
        type={"number"}
        label='Minimum Price'
        value={someParams.minPrice}
        onChange={e =>setParam("Min", e.target.value)}
      ></Input>
      </span>

      <span className='max-price'><Input
        type={"number"}
        label="Maximum Price"
        value={someParams.maxPrice}
        onChange={e => setParam("Max", e.target.value)}
      >
      </Input></span>


      {CATEGORIES.map(cat => (
        <CheckBox
          key={cat}
          value={cat}
          label={cat}
          checked={someParams.categoriesFromURL.includes(cat)}
          onChange={e => {
            const updated = e.target.checked
              ? [...props.categories, cat]
              : props.categories.filter(category => category !== cat);

           setParam('category', updated);
          }}
        />
      ))}

    </div>
  );
};

export default FilterBar;