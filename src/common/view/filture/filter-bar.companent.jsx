import { CATEGORY } from '../../../data/cons';
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

  return (
    <div className="filter-bar">
      <Input
        type="search"
        placeholder='Search'
        value={props.searchTerm}
        onChange={e => HandelFilter("searchTerm", e.target.value)}
      />
      <div className="categories">
        {CATEGORY.map(category => <CheckBox
          key={category}
          label={category}
          value={category}
          checked={props.categoryFromURL.includes(category)}
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
            props.setParams(newParams);
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