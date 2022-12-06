import CheckBox from '../../../components/common/checkbox/checkbox';
import Input from '../../../components/common/input/input';
import MySelect from '../../../components/common/select/select';
import { useState } from 'react';
import { CATEGORIES } from '../../../data/data';
import './filter-bar.css';
import useParams from '../../../components/Hooks/use-params.hook';
// import {useParams} from '../../../components/Hooks/use-params.hook';
/**
 * Renders a filters bar.
 * @param {{
 *  searchTerms: string;
 *  categories: string[];
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */
​
​
​
const FilterBar = () => {
  const { myParam, setParam } = useParams();
  const [price, setPrice] = useState(10);
​
  const handelPrice = e => {
    setPrice(e.target.value);
  };
​
​
  return (
    <div className='wrapper'>
      <div className="input-bar">
        <Input
​
          //set the vlaue in the search input
          // onChange={e => setSearch(e.target.value)}
​
          /// GET THE search value from the local storage 
          // onChange={e => setSearchInLocalStorage(e.target.value)}
          type="search"
          label="Search for Item"
          value={myParam.searchFromURL}
          onChange={e => setParam('searchTerms', e.target.value)}
          placeholder="Search..."
        />
      </div>
​
      &nbsp;&nbsp;&nbsp;
​
      <div className="categories">
        {CATEGORIES.map(cat => (
          <CheckBox
            key={cat}
            label={cat}
            checked={myParam.categoriesURL
              .includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...myParam.categoriesURL, cat]
                : myParam.categoriesURL.filter(category => category !== cat);
​
              setParam('categories', updated);
            }}
          />
        ))}
      </div>
​
      <div className="categories">
        <MySelect
          name="categories"
          label='categories' required
​
          onChange={e => setParam('categories', e.target.value)}>
​
          {
            CATEGORIES.map(item => {
​
              return <option value={item} key={item}>{item}</option>;
            })
          }
​
​
        </MySelect>
​
      </div>
​
​
      <div className="priceFilter">
        <span className='disc'> Please note the Min price is <b>10</b> and the max is <b>500</b></span>
        <Input
          label='min price : '
          type="number"
          onChange={e => setParam('min', e.target.value)}
          min={10}
          max={500}
​
        />
        <Input
          label='max price : '
          type="number"
          onChange={e => setParam('max', e.target.value)}
          max={500}
          min={10}
​
        />
        <input
          className='slider'
          type="range"
          onChange={e => {
            setParam('price', e.target.value);
            handelPrice(e);
          }
          }
          min={10}
          max={500}
​
        />
        <span className='disc'>price: <b>{price}</b></span>
      </div>
    </div>
​
  );
};
export default FilterBar;