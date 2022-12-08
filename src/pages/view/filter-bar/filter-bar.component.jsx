import React from 'react';
import './filter-bar.css';
import { CATEGORIES } from '../../../data/constant';
import CheckBox from '../../../components/common/toggle-bullets/check-boxes.component';
import Input from '../../../components/common/input/input.component';
import { useState } from 'react';
import useParames from '../../../Hooks/params.hook';
import useToggle from '../../../Hooks/toggle.hook';

/**
 * 
 * @param {{
 * searchTerms: string ;
 * categories: string[];
 * setParams:(name :string , value : string | string[]) => void
 * }} props 
 */

const FilterBar = (props) => {
  const [price, setPrice] = useState(0);
  const handelPrice = e => {
    setPrice(e.target.value);
  };

  const {myParams,setParam }=useParames();
  const [isTourist,toggleIsTourist]=useToggle(false);
  return (
    <div className="filter-bar">
      <div className='inputs'>
        <Input
          type="search"
          label="search for item"
          value={myParams.searchTermsFromURL}
          onChange={e =>setParam('searchTerms', e.target.value)}
          placeholder="search"
        />
        <Input
          label='min price :'
          type="number"
          onChange={e =>setParam('min', e.target.value)}
          min={0}
          max={100}

        />
        <Input
          label='max price : '
          type="number"
          onChange={e => setParam('max', e.target.value)}
          min={0}
          max={500}

        />
        <Input

          type="range"
          onChange={e => {
            setParam('price', e.target.value);
            handelPrice(e); }}
          min={0}
          max={500}

        />
        <span className='disc'>price: <b>{price}</b></span>

      </div>

      {
        CATEGORIES.map(cat =>
          <CheckBox key={cat}
            label={cat}
            checked={myParams.categoryFromURL.includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...myParams.categoryFromURL, cat]
                : myParams.categoryFromURL.filter(category => category !== cat);

                setParam('category', updated);
            }}
          />
        )
      }
      <CheckBox
       label = 'tourist'
      checked={isTourist} 
      onChange={toggleIsTourist}
      />
    </div>
  );
};
export default FilterBar;