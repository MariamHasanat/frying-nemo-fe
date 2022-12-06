import { CATEGORY } from '../../../data/cons';
import useParams from '../../../hook/params.hook';
import Input from '../../input/input.component';
import CheckBox from '../check-box/check-box';
import './filter.css';

const FilterBar = (props) => {
  const HandelFilter = (name, inputValue) => {
    const newParams = new URLSearchParams(props.params);
    if (inputValue) {
      newParams.set(name, inputValue);
    } else {
      newParams.set(name, inputValue);
    }
    props.setParams(newParams);
  };
const  myParams = useParams();
  return (
    <div className="filter-bar">
      <div>
      <Input
      label='search' 
        type="search"
        placeholder='Search'
        value={myParams.searchTerm}
        onChange={e => HandelFilter("searchTerm", e.target.value)}
      />
      </div>
      <div className="categories">

        {CATEGORY.map(category => <CheckBox
          key={category}
          label={category}
          value={category}
          checked={myParams.categoryFromURL.includes(category)}
          onChange={(e) => {
            const newParams = new URLSearchParams(props.params);
            const oldItems = newParams.getAll('category');

            if (e.target.checked) {
              newParams.append('category', e.target.value);
            } else {
              const filteredCategories = oldItems.filter(oItem => oItem !== category);
              if (filteredCategories.length) {
                newParams.delete('category');
                filteredCategories.forEach((v) => newParams.append('category', v));
              } else {
                newParams.delete('category');
              }
            }
            myParams.setParams(newParams);
          }}
        />
        )}
      </div>
      <div className="price">
        <label >Max price</label>
        <Input
          type="text"
          placeholder='Max'
          value={props.params.get('max')}
          onChange={(e) => HandelFilter('max', e.target.value)}
        />
        <label >Min price</label>
        <Input
          type="text"
          placeholder='Min'
          value={props.params.get('min')}
          onChange={(e) => HandelFilter('min', e.target.value)}

        />
      </div></div>


  );
};
export default FilterBar;