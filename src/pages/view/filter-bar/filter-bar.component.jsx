import React from 'react';
import './filter-bar.css';
import { CATEGORIES } from '../../../data/constant';
import CheckBox from '../../../components/common/toggle-bullets/check-boxes.component';
import Input from '../../../components/common/input/input.component';
import { useState } from 'react';
/**
 * 
 * @param {{
 * searchTerms: string ;
 * categories: string[];
 * setParams:(name :string , value : string | string[]) => void
 * }} props 
 */

const FilterBar = (props) => {
  const [price,setPrice] =useState(20);
  const handelPrice=e=>{
    setPrice(e.target.value)
  }
  
  return (
    <div className="filter-bar">
      <div className='inputs'>
      <Input
        type="search"
        label="search for item"
        value={props.searchTerms}
        onChange={e => props.setParams('searchTerms', e.target.value)}
        placeholder="search"
      />
       <Input
          label='min price :'
          type="number"
          onChange={e => props.setParams('min', e.target.value)}
          min={0}
          max={100}

        />
        <Input
          label='max price : '
          type="number"
          onChange={e => props.setParams('max', e.target.value)}
          max={100}
          min={0}

        />
        <Input
        
        type="range"
        onChange={e => {props.setParam('price', e.target.value)
        handelPrice(e)
      }
      }
      min={10}
      max={500}
        
        />
        <span className='disc'>price: <b>{price}</b></span>

        </div>

{
        CATEGORIES.map(cat =>
          <CheckBox key={cat}
            label={cat}
            checked={props.categories.includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...props.categories, cat]
                : props.categories.filter(category => category !== cat);

              props.setParams('category', updated);
            }}
          />
        )
      }
    </div>
  );
};
export default FilterBar;