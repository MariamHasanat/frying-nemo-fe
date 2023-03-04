import { CATEGORY } from '../../../data/cons';
import useParams from '../../../hook/params.hook';
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


/**
 * Renders a filters bar.
 * @param {{ 
 *  isTourist: boolean;
 *  toggleIsTourist: () => void;
 * }} props
 */

const FilterBar = (props) => {
  const { myParams, setParam} = useParams();  
  return (
    <div className="filter-bar">
      <div>
        <Input
          type="search"
          label="Search for Item"
          value={myParams.searchTermsFromURL || ''}
          onChange={e => setParam('searchTerms', e.target.value)}
          placeholder="Search"
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
        <CheckBox label='Tourist' checked={props.isTourist} onChange={props.toggleIsTourist}/>
      </div>
      <div className="price">
        <label >Max price</label>
        <Input
          type="text"
          placeholder='Max'
          value={myParams.maxFromUrl}
          onChange={(e) => setParam('max', e.target.value)}
        />
        <label >Min price</label>
        <Input
          type="text"
          placeholder='Min'
          value={myParams.minFromUrl}
          onChange={(e) => setParam('min', e.target.value)}
        />
      </div>
      </div>


  );
};
export default FilterBar;