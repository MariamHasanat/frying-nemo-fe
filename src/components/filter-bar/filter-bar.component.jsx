import React from "react";
import './filter-bar.css';
import Input from "../input/input.component";
import CATEGORIES from "../data/categories";
import Select from "../select/select.component";

const FilterBar = (props) => {

  const handleFilterChange = (filterName, inputValue) => {
    const newParams = new URLSearchParams(props.Params);
    // const inputValue = e.target.value;

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
        type='search'
        label='Search for Item'
        value={props.serchTerms}
        onChange={e => handleFilterChange('searchTerms', e.target.value)}
        placeholder='Search'
      />

      <Select 
      name='category' 
      label='Category'
      value={props.category}
      onChange={e => handleFilterChange('category', e.target.value)}>
        {CATEGORIES.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
        
        <option value="">All</option>
      </Select>

    </div>
  );
};

export default FilterBar;