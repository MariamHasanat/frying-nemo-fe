// import React from 'react'
import Input from '../../../common/input/input.component';
import Select from '../../../common/Select/Select';
import { CATEGORIES } from '../../../data/category';
import './filterBar.css';

const FilterBar = (props) => {
  return (
    <div className="filter-group">
      <Input
        type="search"
        value={props.searchFromURL}
        onChange={e => {
          const newParams = new URLSearchParams(props.params);
          const inputValue = e.target.value;

          if (inputValue) {
            newParams.set('search', inputValue);
          } else {
            newParams.delete('search');
          }
          props.setParams(newParams);
        }}
        placeholder="Search"
      />
      <Select
        name="category"
        label="Category"
        required
        onChange={e => {
          const newParams = new URLSearchParams(props.params);
          const inputValue = e.target.value;

          if (inputValue) {
            newParams.set('category', inputValue);
          } else {
            newParams.delete('category');
          }
          props.setParams(newParams);
        }}
        >
          <option value="">ALL</option>
        {CATEGORIES.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select>

    </div>
  );
};

export default FilterBar;