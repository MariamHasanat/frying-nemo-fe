import React from 'react';
import { CATEGORIES } from '../add/form/data/constant';
import Input from '../common/input/input';
import Select from '../common/select/select';
import './filter-bar.css'
const FilterBar = (props) => {
  
  const handelitem=( fiterName,inputvalue)=>{
     const newParam = new URLSearchParams(props.param);
    if (inputvalue) {
      newParam.set(fiterName, inputvalue);
    }
    else {
      newParam.delete(fiterName);
    }

    props.SetParam(newParam);
  } 
  return (
    <div className='bar'> <Input
      type="search"
      value={props.searchFromUrl}
      placeholder="Search"
      onChange={e => handelitem('search',e.target.value)}
    ></Input>
      <Select
        label=""
        name='category'
        value={props.catogeryFromUrl}
        onChange={e=>handelitem('catogery',e.target.value)}
      >\
      <option value="">ALL</option>
        {CATEGORIES.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select></div>

  );
};

export default FilterBar;