import './filtered-search.css';
import Input from '../../common/input/input.component';
import { CATEGORIES } from '../../../data/constants';
import Select from '../../common/select/select.component';



const FilteredSearch = (props) =>{
  const handleFilterSearch = (str,value)=>{
    const newParams = new URLSearchParams(props.searchParams);
    if (value && value !== 0) {
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
  onChange={(e) => handleFilterSearch("q",e.target.value)}
  label="Search"
  /> 
  <Select name="category" label="categories"
      onChange={(e) => handleFilterSearch("category",e.target.value)}
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
  <Input type="number" label='Min Price'
   onChange={e=> handleFilterSearch("minprice",e.target.value)}
    value={props.minPriceFromUrl || 0} min={0}></Input>
  <Input type="number" label='Max Price'
   onChange={e=> handleFilterSearch("maxprice",e.target.value)}
    value={props.maxPriceFromUrl || 0} min={0}></Input>
</div>
);};


export default FilteredSearch;