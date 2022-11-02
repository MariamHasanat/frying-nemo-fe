import React from 'react';
import Input from '../../../common/input/input';
import Select from '../../../common/Select/Select';
import "./filter.css";
import { CATAGORIES } from '../../../common/data/constants.js';
import { useState } from 'react';
const Filter = (pro) => {
  const [Min, setMin] = useState("")
  const [Max, setMax] = useState("")
  const handleFilterChange = (filterName, inputValue) => {
    const newParams = new URLSearchParams(pro.Params);
    setMin(inputValue);
    setMax(inputValue);
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


      <span className='Minclass'><Input
        type={"number"}
        value={pro.MINParams}
        label='Min'
        onChange={e => handleFilterChange("Min", e.target.value)}
        min={Min}></Input>
      </span>


      <span className='Maxclass'><Input
        type={"number"}
        value={pro.MAXParams}
        label="Max"
        onChange={e => handleFilterChange("Max", e.target.value)}
        max={Max}>
      </Input></span>
    </div>


  );
};

export default Filter;