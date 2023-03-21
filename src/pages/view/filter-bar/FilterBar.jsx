import CheckBox from '../../../common/check-box/check-box.component';
import Input from '../../../common/input/input.component';
import { CATEGORIES } from '../../../data/category';
import useParam from '../../../Hooks/useParam.hook';

import './filterBar.css';

/**
 * Renders a filters bar.
 * @param {{
 *  search: string;
 *  categories: string[];
 *  min: string;
 *  max: string;
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */

const FilterBar = () => {
  const {myParams , setParam} = useParam();


  return (
    <div className="filter-group">
      <Input
        type="search"
        value={myParams.searchFromURL || ''}
        onChange={e => setParam('search', e.target.value)}
        placeholder="Search"
      />
      <Input
        type="number"
        value={myParams.minFromURL || ''}
        onChange={e => setParam('min', e.target.value)}
        placeholder="Minimum price"
      />
      <Input
        type="number"
        value={myParams.maxFromURL || ''}
        onChange={e => setParam('max', e.target.value)}
        placeholder="Maximum price"
      />
      <div className="category">
        {CATEGORIES.map(category => (
          <CheckBox
            key={category}
            label={category}
            checked={myParams.categoriesFromURL.includes(category)}
            onChange={e => {
              const updatedList = e.target.checked
                ? [...myParams.categoriesFromURL ,category]
                : myParams.categoriesFromURL.filter(t => t !== category);

             setParam('category', updatedList);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;