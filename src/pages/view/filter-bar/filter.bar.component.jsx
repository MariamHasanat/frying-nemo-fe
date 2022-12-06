import React from 'react';
import Input from '../../../components/common/input';
import CheckBox from '../../../components/common/toggle-bullets/check-box.component';
import { CATEGORIES } from '../../../components/data/categories';
import useParams from '../../../hooks/params.hook';
import './filter.css';
const Filter = () => {
  const { myParams, setParam } = useParams();

  const handleOnchangeOnURL = (filterName, inputValue) => {

    // const newParam = new URLSearchParams(myParams.params);

    // if(inputValue) {
    //   newParam.set(filterName, inputValue);
    // } else {
    //   newParam.delete(filterName);
    // }
    setParam(filterName, inputValue);
  };



  return (
    <div className='filter-bar'>

      <Input
        type="search"
        label='search'
        value={myParams.searchTermsFromURL}
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
    </div>

  );
};

export default Filter;