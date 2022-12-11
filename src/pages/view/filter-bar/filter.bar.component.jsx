import React from 'react';
import Input from '../../../components/common/input-bar-component/input';
import CheckBox from '../../../components/common/toggle-bullets/check-box.component';
import { CATEGORIES } from '../../../components/data/categories';
import useParams from '../../../hooks/params.hook';
import './filter.css';


const Filter = (props) => {
  const { myParams, setParam } = useParams();
  //const [isTourist, setIsTourist] = useToggle(false);
 
  const handleOnchangeOnURL = (filterName, inputValue) => setParam(filterName, inputValue);
  

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
      <div className='tourist'>
        <CheckBox
          label='Tourist'
          value={props.isTourist} 
          onChange={props.setIsTourist}
        />
      </div>
    </div>

  );
};

export default Filter;