import React from 'react';
import useSearchItem from '../../hooks/searchItem.hook';
import { CATEGORIES } from '../add/form/data/constant';
import CheckBox from '../common/cheackebox/check-box';
import Input from '../common/input/input';
import './filter-bar.css';

const FilterBar = (props) => {
const {myParam , setParam}=useSearchItem();
  return (
    <div className="filter-bar">
      <Input
        type="search"
        value={myParam.searchFromUrl}
        placeholder="Search"
        onChange={e =>setParam('searchTerms', e.target.value)}
      />

      <div className="categories">
        {CATEGORIES.map(cat => (
          <CheckBox
            key={cat}
            label={cat}
            checked={myParam.categoriesFromURL.includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...myParam.categoriesFromURL, cat]
                : myParam.categoriesFromURL.filter(category => category !== cat);
              setParam('category', updated);
            }}
          />
        ))}

      </div>
      <br />
      <Input
        className='price'
        type={'number'}
        label={"Min"}
        placeholder="Min Number"
        onChange={e => {
          const min = e.target.value;
          props.setMin(min);
        }
        }

      ></Input>

      <Input
        className='price'
        type={'number'}
        label={"Max"}
        placeholder="Max Number"
        onChange={e => {
          const max = e.target.value;
          props.setMax(max);
        }

        }

      ></Input>
    </div>
  );
};

export default FilterBar;