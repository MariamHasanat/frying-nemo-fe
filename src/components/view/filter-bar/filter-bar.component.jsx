import React from 'react';
import './filter-bar.css';
import Input from '../../common/input/input.component';
import { CATEGORIES } from '../../../data/constants';
import CheckBox from '../../common/toggle-bullets/check-box.component';
import useParams from '../../../hooks/params.hook';

/**
 * Renders a filters bar.
 * @param {{ 
 *  isTourist: boolean;
 *  toggleIsTourist: () => void;
 * }} props
 */
const FilterBar = (props) => {

  const { myParams, setParam } = useParams();

  return (
    <div className="filter-bar">
      <Input
        type="search"
        label="Search for Item"
        value={myParams.searchTermsFromURL}
        onChange={e => setParam('searchTerms', e.target.value)}
        placeholder="Search"
      />

      <div className="price">

        <Input
          type="number"
          label="Min Price"
          // value={props.min}
          placeholder='Min'
          onChange={e => {
            const min = e.target.value;
            props.setMin(min);
          }}
        />

        <Input
          type="number"
          label="Max Price"
          // value={props.max}
          placeholder='Max'
          onChange={e => {
            const max = e.target.value;
            props.setMax(max);
          }}
        />

      </div>
      <div className="categories">
        {CATEGORIES.map(cat => (
          <CheckBox
            key={cat}
            label={cat}
            checked={myParams.categoriesFromURL.includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...myParams.categoriesFromURL, cat]
                : myParams.categoriesFromURL.filter(category => category !== cat);

              setParam('category', updated);
            }}
          />
        ))}
      </div>

      <div className="tourists">
        <CheckBox label="Tourist" checked={props.isTourist} onChange={props.toggleIsTourist} />
      </div>

    </div>
  );
};

export default FilterBar;
