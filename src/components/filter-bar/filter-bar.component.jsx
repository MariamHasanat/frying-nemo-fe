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

  // const handleFilterChange = (filterName, inputValue) => {
  //   const newParams = new URLSearchParams(props.Params);
  //   // const inputValue = e.target.value;

  //   if (inputValue) {
  //     newParams.set(filterName, inputValue);
  //   } else {
  //     newParams.delete(filterName);
  //   }
  //   props.setParams(newParams);
  // };


  return (
    <div className="filter-bar">
      <Input
        type='search'
        label='Search for Item'
        value={props.search}
        onChange={e => props.setParams('searchTerms', e.target.value)}
        placeholder='Search'
      />

      {/* <Select 
      name='category' 
      label='Category'
      value={props.category}
      onChange={e => handleFilterChange('category', e.target.value)}>
        {CATEGORIES.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
        
        <option value="">All</option>
      </Select> */}

      {/* <div className="categories">
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
            } */}
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