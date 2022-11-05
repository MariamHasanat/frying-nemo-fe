import React from 'react';
import CheckBox from '../../../components/common/checkbox/checkbox.component';
import Input from '../../../components/common/input/input.component';
import Select from '../../../components/common/select/select.component';
import CATEGORIES from '../../../data/constants';
import './filter-bar.css';

const FilterBar = (props) => {


  return (
    <div className='filter-bar'>
      <Input type='search' value={props.searchUsingURL}
        onChange={e => {
          props.setParams('searchTerms', e.target.value);
        }}
        placeholder='search'
        label='search'
      />

      <Input 
        label='min price' 
        value = {props.minPrice} 
        onChange = {e => props.setParams ('min' , e.target.value)}
       />
      <Input 
        label='max price' 
        value = {props.maxPrice} 
        onChange = {e => props.setParams ('max' , e.target.value)}
       />

      <div className='menuItems'>
        {CATEGORIES.map(cat => {
          return (<CheckBox key={cat} label={cat}
            checked={props.categoryUsingURL.includes(cat)}
            onChange={e => {
              const updatedCategories = e.target.checked
                ? [...props.categoryUsingURL, cat]
                : props.categoryUsingURL.filter(c => c != cat);
              props.setParams('category', updatedCategories);
            }}
          />);
        })}
      </div>

      {/* The following code is for a single category filter 
      -> you have to select only one category of all */}

      {/* <Select label='Select' name='catigory'
         onChange = {e => filterChanges ('category' , e.target.value)} 
      >
        <option value=''>All</option>
        {CATEGORIES.map(item =>
          <option key={item} value={item}>{item}</option>
        )}
         key must be mintions 
      </Select> */}
    </div>
  );
};

export default FilterBar;
