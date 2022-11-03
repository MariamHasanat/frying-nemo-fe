import { CATEGORY } from '../../../data/cons';
import  Input  from '../../input/input.component';
import  Select  from '../../select/select.component';
import CheckBox from '../check-box/check-box';
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
<div className="categories">
        {CATEGORY.map(cat => <CheckBox
          key={cat}
          value={cat}
          label={cat}
          // checked={props.categoryFromURL.includes(cat)}
          onChange={(e) => {
            const newParams = new URLSearchParams(props.params);
            const oldItems = newParams.getAll('category');

            if (e.target.checked) {
              newParams.append('category', cat);
            } else {
              const filteredCategories = oldItems.filter(oItem => oItem !== cat);
              if (filteredCategories.length) {
                newParams.delete('category');
                filteredCategories.forEach((v) => newParams.append('category', v));
              } else {
                newParams.delete('category');
              }
            }

            props.setParams(newParams);
          }}
        />
        )}
      </div>

    </div>
   
  )
};
export default FilterBar;