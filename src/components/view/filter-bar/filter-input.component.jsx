import { CATEGORIES } from '../../../data/constants';
import Input from '../../common/input/input.component';
import './filter-input.css';
import CheckBox from '../toggle-bullets/check-box.component';
import search from '../../../assets/images/search.png';
import useParams from '../../../hooks/params.hook';
import Toggle from '../../common/toggle/toggle.component';

/**
 * Renders a filters bar.
 * @param {{
 *  searchParamFromURl: string;
 *  categories: string[];
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */
const FilterBar = props => {

  const { myParams, setParam } = useParams();

  return (

    <div className='filter-bar-container'>
      <div className='search-bar'>
        <div className='search'>
          <Input
            value={myParams.searchParamFromURl}
            type='Search'
            placeholder='search'
            onChange={e => setParam('search', e.target.value)}
          />
          <img src={search} width='30' height='30' alt='search-icon' />
        </div>
      </div>

      <div className='categories'>
        {
          CATEGORIES.map(
            (categoryItem) => {
              return <CheckBox
                key={categoryItem}
                label={categoryItem}
                checked={myParams.categoryFromURl.includes(categoryItem)}
                onChange={e => {
                  // console.log(typeof myParams.categoryFromURl);
                  const updated = e.target.checked
                    ? [...myParams.categoryFromURl, categoryItem]
                    : myParams.categoryFromURl.filter(category => category !== categoryItem);
                  // console.log(typeof myParams.categoryFromURl);
                  setParam('category', updated);
                }}
              />;
            })
        }
      </div>
      <Toggle
        label='tourist'
        checked={props.tourist}
        onChange={props.setTourist}
      />
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