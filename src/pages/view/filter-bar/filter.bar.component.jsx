import React from 'react';
import Input from '../../../components/common/input';
import { CATEGORIES } from '../../../components/data/categories';
import Select from '../../../components/selector/selector.component';


const Filter = (props) => {


  const handleOnchangeOnURL = (filterName, inputValue) => {

    const newParam = new URLSearchParams(props.params);
    
    if(inputValue) {
      newParam.set(filterName, inputValue);
    } else {
      newParam.delete(filterName);
    }
    props.setParams(newParam);
  };





  return (
    <div>

      <Input
        type="search"
        label='search'
        value={props.searchParams}
        onChange={e => {
          handleOnchangeOnURL('q', e.target.value);
        }}
        placeholder="Search"
      />
      <Select
        name='select'
        label='select'
        value={props.categoriesFromURL}
        onChange={e => {
          handleOnchangeOnURL('category', e.target.value)
        }

        }
      >
        {
          CATEGORIES.map(item => {
            return <option key={item} value={item}>{item}</option>;
          }
          )
        }
      </Select>
    </div>

  );
};

export default Filter;