import React from 'react';
import Input from '../../../components/common/input/input.component';
import Select from '../../../components/common/select/select.component';
import { CATEGORIES } from '../../../data/constant';
import "./filter-bar.css";
function FilterBar(props) {

  const handelFilterChange = (filterName,inputValue)=>{ 
    const newParams = new URLSearchParams(props.params);


    if (inputValue) {
      newParams.set(filterName, inputValue);
    }
    else {
      newParams.delete(filterName);
    }

    props.setParams(newParams);
  };

  
  return (

    <div  className="filter-bar">

      <Input
        type="search"
        label='search for item'
        value={props.searchTermsFromURL}
        onChange={e => handelFilterChange ('searchTerms',e.target.value)}
         

        placeholder="Search"

      />


      <Select
        name="category"
        label="category"
        value={props.categoryFromURL} 
        onChange={e => handelFilterChange ('category',e.target.value)}
      >
        <option value="">all</option>
        {CATEGORIES.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select>
    </div>
  );
}

export default FilterBar;