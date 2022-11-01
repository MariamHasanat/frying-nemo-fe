import React from 'react';
import Input from '../../../components/common/input/input';
import MySelect from '../../../components/common/select/select';
import { CATEGORIES } from '../../../data/data';
import './filter-bar.css';
export const FilterBar = (props) => {


  const HandleFilterSearch = (filtetname, inputValue) => {

    const newParm = new URLSearchParams(props.params);
    // const inputValue = e.target.value;
    if (inputValue) {
      newParm.set(filtetname, inputValue);
    } else {
      newParm.delete(filtetname);
    }
    props.setParams(newParm);


  };
  return (
    <div className="input-bar">
      <Input

        //set the vlaue in the search input
        // onChange={e => setSearch(e.target.value)}

        ///      GET THE search value from the local storage 
        // onChange={e => setSearchInLocalStorage(e.target.value)}
        label='Search'
        type="search"
        value={props.searchFromURL}
        onChange={e => HandleFilterSearch('search', e.target.value)}

        placeholder="Search..."
      />
      &nbsp;&nbsp;&nbsp;
      <MySelect
        name="categories"
        label='categories' required

        onChange={e => HandleFilterSearch('categories', e.target.value)}>

        {
          CATEGORIES.map(item => {

            return <option value={item} key={item}>{item}</option>;
          })
        }


      </MySelect>

    </div>

  );
};
export default FilterBar;
