import React from 'react';
import { CATEGORIES } from '../add/form/data/constant';
import CheckBox from '../common/cheackebox/check-box';
import Input from '../common/input/input';
import './filter-bar.css';
/**
 * Renders a filters bar.
 * @param {{
 *  searchFromUrl: string;
 *  categoriesFromURL: string[];
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */

const FilterBar = (props) => {

  return (
    <div className="filter-bar">
      <Input
        type="search"
        value={props.searchFromUrl}
        placeholder="Search"
        onChange={e => props.setParam('searchTerms', e.target.value)}

      ></Input>

  

      <div className="categories">
        {CATEGORIES.map(cat => (
          <CheckBox
            key={cat}
            label={cat}
            checked={props.categoriesFromURL.includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...props.categoriesFromURL, cat]
                : props.categoriesFromURL.filter(category => category !== cat);
              props.setParam('category', updated);
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
        onChange={e =>
          {
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