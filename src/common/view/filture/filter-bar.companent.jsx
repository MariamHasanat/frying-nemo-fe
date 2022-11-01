import { CATEGORY } from '../../../data/cons';
import  Input  from '../../input/input.component';
import  Select  from '../../select/select.component';
import './filter.css';
const FilterBar = (props)=>{
  const HandelFilter=(name,inputValue)=>{
    const newParams = new URLSearchParams(props.params);
    if (inputValue) {
      newParams.set(name, inputValue);
    } else {
      newParams.set(name, inputValue);
    }
    props.setParams(newParams);
  }
  return (
    <div className="filter-bar">
       <Input
    type="search"
    placeholder='Search'
    value={props.searchTerm}
    onChange={e => HandelFilter("searchTerm",e.target.value)}
  />
<Select 
name="category"
label="category"
value={props.categoryFromURL}
onChange={e=>HandelFilter("category",e.target.value)}
>  <option value="">All</option>

{
  CATEGORY.map(item=>{
    return <option value={item} key={item}>{item}</option>
  })
}
</Select>
    </div>
   
  )
};
export default FilterBar;