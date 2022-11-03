import React from 'react'
import Input from '../../../components/common/input/input.component';
import Select from '../../../components/common/select/select.component';
import  CATEGORIES from '../../../data/constants'
import './filter-bar.css'

const FilterBar = (props) => {

  const filterChanges = (filter , inputValue) => {
    let newParam = new URLSearchParams (props.param) ;  // create new object of the same type as param
        if (inputValue) {
          newParam.set (filter , inputValue) ; // use set function to edit the search value of the new object
        }
        else {
          newParam.delete (filter) ;
        } 
        props.setParam (newParam) ;  // set the param value as the new created object 
  }
  return (
    <div className='filter-bar'>
      <Input type='search' value={props.searchUsingURL}
      onChange = {e => {
        filterChanges ('searchTerms' , e.target.value) ;
      }} 
      placeholder = 'search'
      label='search'
      />
      
      <Select label='Select' name='catigory'
         onChange = {e => filterChanges ('category' , e.target.value)} 
      >
        <option value=''>All</option>
        {CATEGORIES.map(item =>
          <option key={item} value={item}>{item}</option>
        )}
        {/* key must be mintions */}
      </Select>
    </div>
  )
}

export default FilterBar ;
