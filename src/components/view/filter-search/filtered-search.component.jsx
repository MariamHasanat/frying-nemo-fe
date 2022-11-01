import './filtered-search.css';
import Input from '../../common/input/input.component';
import { CATEGORIES } from '../../../data/constants';
import Select from '../../common/select/select.component';



const FilteredSearch = (props) =>{
  const setSearchTermAndSearchParam = (str,value)=>{
    if(str === "q"){
    props.setSearchParams({ str: value });
    props.setSearchTerm(value);
  }
    if(str === "category"){
      props.setcategoryParams({ str: value });
      props.setSearchTerm(value);
    }
    if(str === "q " && !value){
      props.setSearchParams(props.searchParams.delete('q'));
    }
    if(str === "q " && !value){
      props.setSearchParams(props.searchParams.delete('q'));
    }
  };
return(
  <div className='search-items-constained'>
  <Input
  value={props.searchTerm}
  onChange={(e) => setSearchTermAndSearchParam("q",e.target.value)}
  label="Search"
  /> 
  <Select name="category" label="categories"
    onChange={(e) => setSearchTermAndSearchParam("category",e.target.value)}
  >
    <option>All</option>
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