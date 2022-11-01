import React from "react";
import Input from "../../../../common/input/input.component";

const FilterBar =(props) =>{
    return(
<Input
 type="search"
 value={props.searchTermsFromURL}
 onChange={e => {
   const newParams = new URLSearchParams(params);
   const inputValue = e.target.value;

   if (inputValue) {
     newParams.set('searchTerms', inputValue);
   } else {
     newParams.delete('searchTerms');
   }

   setParams(newParams);
 }}
 placeholder="Search"
/>
    );
}


export default FilterBar