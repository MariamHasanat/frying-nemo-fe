import { CATEGORIES } from '../../data/constants';
import Input from '../common/input/input.component';
import './filter-input.css';
import CheckBox from '../toggle-bullets/check-box.component';
import search from '../../assets/images/search.png';

/**
 * Renders a filters bar.
 * @param {{
 *  searchParamFromURl: string;
 *  categories: string[];
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */
const FilterBar = props => {

  return (

    <div className='filter-bar-container'>

      <div className='search-bar'>

        <div className='search'>

          <Input
            value={props.searchParamFromURl}
            type='Search'
            placeholder='search'
            onChange={e => props.setParam('search', e.target.value)}
          />
          <img src={search} width='30' height='30' />
        </div>
      </div>

      <div className='categories'>
        {
          CATEGORIES.map(
            (categoryItem) => {
              return <CheckBox
                key={categoryItem}
                label={categoryItem}
                checked={props.categories.includes(categoryItem)}
                onChange={e => {
                  console.log(typeof props.categories);
                  const updated = e.target.checked
                    ? [...props.categories, categoryItem]
                    : props.categories.filter(category => category !== categoryItem);
                  console.log(typeof props.categories);
                  props.setParam('category', updated);
                }}
              />;
            })
        }
      </div>

      <div className='price-filter'>
        <div className='min'>

          <label htmlFor="min">min price</label>
          <input type='number' id='min' min={10} />
        </div>

        <div className='max'>
          <label htmlFor="max">max price</label>
          <input type='number' id='max' max={200} />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;