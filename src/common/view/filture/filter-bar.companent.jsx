import { CATEGORY } from '../../../data/cons';
import useParams from '../../../hook/params.hook';
import useToggle from '../../../hook/tourist.hook';
import Input from '../../input/input.component';
import CheckBox from '../check-box/check-box';
import './filter.css';

/**
 *
 * @param {{
 * searchTerms: string ;
 * categories: string[];
 * setParams:(name :string , value : string | string[]) => void
 * }} props
 */
const FilterBar = (props) => {
  const { myParams, setParam} = useParams();
 const {isTourist,toggleIsTourist} = useToggle(false);
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
      <div>
        <Input
          label='search'
          type="search"
          placeholder='Search'
          value={myParams.searchTerm}
          onChange={e => setParam("searchTerm", e.target.value)}
        />
      </div>
      <div className="categories">

        {CATEGORY.map(category => <CheckBox
          key={category}
          label={category}
          value={category}
          checked={myParams.categoriesFromURL.includes(category)}
          onChange={e => {
            const updated = e.target.checked
              ? [...myParams.categoriesFromURL, category]
              : myParams.categoriesFromURL.filter(categorys => categorys !== category);
            setParam('category', updated);
          }}
        />
        )}
        <CheckBox label='Tourist' checked={isTourist} onChange={toggleIsTourist}/>
      </div>
      <div className="price">
        <label >Max price</label>
        <Input
          type="text"
          placeholder='Max'
          value={myParams.maxFromUrl}
          onChange={(e) => HandelFilter('max', e.target.value)}
        />
        <label >Min price</label>
        <Input
          type="text"
          placeholder='Min'
          value={myParams.minFromUrl}
          onChange={(e) => HandelFilter('min', e.target.value)}
        />
      </div>
      </div>


  );
};
export default FilterBar;