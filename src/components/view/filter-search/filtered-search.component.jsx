import './filtered-search.css';
import Input from '../../common/input/input.component';
import { CATEGORIES } from '../../../data/constants';
import Select from '../../common/select/select.component';



const FilteredSearch = (props) =>{
  const setSearchParamAndCategoryParam = (str,value)=>{
    if(str === "q"){
    props.setSearchParams({ "q": value });
    props.setSearchTerm(value);
  }
    if(str === "category"){
      props.setCategoryParams({ "category": value });
      props.setCategoryTerm(value);
    }
    if(str === "q" && !value){
      props.setSearchParams(props.searchParams.delete('q'));
    }
    if(str === "category" && !value){
      props.setCategoryParams(props.categoryParams.delete('category'));
    }
  };
return(
  <div className='search-items-constained'>
  <Input
  value={props.searchTerm}
  onChange={(e) => setSearchParamAndCategoryParam("q",e.target.value)}
  label="Search"
  /> 
  <Select name="category" label="categories"
    onChange={(e) => setSearchParamAndCategoryParam("category",e.target.value)}
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