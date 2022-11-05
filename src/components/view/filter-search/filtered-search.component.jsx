import './filtered-search.css';
import Input from '../../common/input/input.component';
import { CATEGORIES } from '../../../data/constants';
import Select from '../../common/select/select.component';



const FilteredSearch = (props) =>{
  const setSearchParamAndCategoryParam = (str,value)=>{
    const newParams = new URLSearchParams(props.searchParams);
    if (value) {
      newParams.set(str,value);
    } else {
      newParams.delete(str);
    }
    props.setSearchParams(newParams);
  };
return(
  <div className='search-items-constained'>
  <Input
  value={props.searchTermsFromURL}
  onChange={(e) => setSearchParamAndCategoryParam("q",e.target.value)}
  label="Search"
  /> 
  <Select name="category" label="categories"
    onChange={(e) => setSearchParamAndCategoryParam("category",e.target.value)}
    value={props.categoryFromURL}
  >
    <option value= "" >All</option>
  {CATEGORIES.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  })}
</Select>
</div>
);};


export default FilteredSearch;