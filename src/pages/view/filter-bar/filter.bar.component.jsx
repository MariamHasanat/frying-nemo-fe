import React from 'react';
import Input from '../../../components/common/input';
import CheckBox from '../../../components/common/toggle-bullets/check-box.component';
import { CATEGORIES } from '../../../components/data/categories';

const Filter = (props) => {


  const handleOnchangeOnURL = (filterName, inputValue) => {

    // const newParam = new URLSearchParams(props.params);

    // if(inputValue) {
    //   newParam.set(filterName, inputValue);
    // } else {
    //   newParam.delete(filterName);
    // }
    props.setParam(filterName, inputValue);
  };



  return (
    <div>

      <Input
        type="search"
        label='search'
        value={props.searchTerms}
        onChange={e => {
          handleOnchangeOnURL('searchTerms', e.target.value);
        }}
        placeholder="Search"
      />
      <div className="categories">
        {CATEGORIES.map(cat => (
          <CheckBox
            key={cat}
            label={cat}
            checked={props.categories.includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...props.categories, cat]
                : props.categories.filter(category => category !== cat);

              props.setParam('category', updated);
            }}
          />
        ))}
      </div>
    </div>

  );
};

export default Filter;