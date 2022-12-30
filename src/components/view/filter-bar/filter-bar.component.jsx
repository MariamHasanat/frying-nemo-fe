import React from 'react';
import CheckBox from '../../../components/common/checkbox/checkbox.component';
import Input from '../../../components/common/input/input.component';
import CATEGORIES from '../../../data/constants';
import { useParams } from '../../../hooks/params.hook';
import './filter-bar.css';

const FilterBar = () => {
  const {param , setParam} = useParams() ;
  return (
    <div className='filter-bar'>
      <Input type='search' value={param.searchUsingURL || ''}
        onChange={e => {
          setParam('searchTerms', e.target.value);
        }}
        placeholder='search'
        label='search'
      />

      <Input 
        label='min price' 
        value = {param.minPrice} 
        onChange = {e => setParam ('min' , e.target.value)}
       />
      <Input 
        label='max price' 
        value = {param.maxPrice} 
        onChange = {e => setParam ('max' , e.target.value)}
       />

      <div className='menuItems'>
        {CATEGORIES.map(cat => {
          return (<CheckBox key={cat} label={cat}
            checked={param.categoryUsingURL.includes(cat)}
            onChange={e => {
              const updatedCategories = e.target.checked
                ? [...param.categoryUsingURL, cat]
                : param.categoryUsingURL.filter(c => c !== cat);
              setParam('category', updatedCategories);
            }}
          />);
        })}
      </div>
    </div>
  );
};

export default FilterBar;
