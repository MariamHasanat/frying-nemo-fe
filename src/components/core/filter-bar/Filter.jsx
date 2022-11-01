import React from 'react';
import Input from '../../../common/input/input';
import Select from '../../../common/Select/Select';
import "./filter.css";
import { CATAGORIES } from '../../../common/data/constants.js';

const Filter = (pro) => {

  const handleFilterChange = (filterName, inputValue) => {
    const newParams = new URLSearchParams(pro.Params);

    if (inputValue) {
      newParams.set(filterName, inputValue);
    } else {
      newParams.delete(filterName);
    }
    pro.setParams(newParams);
  };

  return (
    <div className='beside' ><Input 
    type={"search"} 
    value={pro.searchURL}
    placeholder="Search"
     onChange={e => handleFilterChange('searchTerms', e.target.value)} ></Input>


      <span ><Select value={pro.categoryParams}
       onChange={e => handleFilterChange('category', e.target.value)}> 
       <option value="">ALL</option>
        {CATAGORIES.map(item => {
        return <option value={item} key={item}>{item}</option>;
      })}  </Select></span>

    </div>

  );
};

export default Filter;