import React from "react";
import Input from "../../../../common/input/input.component";
import Select from "../../../../common/select/select.component";
import CATEGORIES from "../../../../data/constant";

const FilterBar =(props) =>{

    const handleFilterChange = (firstName, inputValue) => {
        
        const newParams = new URLSearchParams(props.params);
    
     
        if (inputValue) {
          newParams.set('searchTerms', inputValue);
        } else {
          newParams.delete('searchTerms');
        }
     
       props .setParams(newParams);
    };
    return(
        <div>
<Input
 type="search"
 value={props.searchTermsFromURL}
 onChange={e => handleFilterChange('searchTerms', e.target.value)}

 placeholder="Search"
/>
<Select
name="category"
label="Category"
value={props.categoryFromURL}
onChange={e => handleFilterChange('category', e.target.value)}
/>
<option value="">All</option>



</div>
    );
}


export default FilterBar