import React, { useState } from 'react';
import CheckBox from '../../../components/common/checkbox/checkbox';
import Input from '../../../components/common/input/input';
// import MySelect from '../../../components/common/select/select';
import { CATEGORIES } from '../../../data/data';
import './filter-bar.css';
/**
 * Renders a filters bar.
 * @param {{
 *  searchTerms: string;
 *  categories: string[];
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */

// const HandleFilterSearch = (props) => {

//   const newParm = new URLSearchParams(props.params);
//   // const inputValue = e.target.value;
//   if (inputValue) {
//     newParm.set(filtetname, inputValue);
//   } else {
//     newParm.delete(filtetname);
//   }
//   props.setParams(newParm);


// };
export const FilterBar = (props) => {
  const [price, setPrice] = useState(40);

  const handelPrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      <div className="input-bar">
        <Input

          //set the vlaue in the search input
          // onChange={e => setSearch(e.target.value)}

          /// GET THE search value from the local storage 
          // onChange={e => setSearchInLocalStorage(e.target.value)}
          type="search"
          label="Search for Item"
          value={props.searchTerms}
          onChange={e => props.setParam('searchTerms', e.target.value)}
          placeholder="Search..."
        />
      </div>

      &nbsp;&nbsp;&nbsp;

      <div className="categories">
        {CATEGORIES.map(cat => (
          <CheckBox
            key={cat}
            label={cat}
            checked={props.categories
              .includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...props.categories, cat]
                : props.categories.filter(category => category !== cat);

              props.setParam('categories', updated);
            }}
          />
        ))}
      </div>
      <div className="priceFilter">
        <Input
          type="range"
          handelPrice={handelPrice}

        />


      </div>
    </div>

  );
};
export default FilterBar;
