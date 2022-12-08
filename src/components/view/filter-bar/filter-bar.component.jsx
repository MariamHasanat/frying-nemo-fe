import './filter-bar.css';
import Input from '../../common/input/input.component';
import { CATEGORIES } from '../../../data/data';
import CheckBox from '../../common/toggle-bullets/check-box.component';
import useParam from '../../../hooks/params.hook';

const FilterBar = () => {
  const {myParams , setParam} = useParam();
  
  return (
    <div className="filter-bar">
      <Input
        type="search"
        label="Search for Item"
        value={myParams.searchTermsFromURL || ''}
        onChange={e => setParam('searchTerms', e.target.value)}
        placeholder="Search"
      />
      <div className="categories">
        {CATEGORIES.map(cat => (
          <CheckBox
            key={cat}
            label={cat}
            checked={myParams.categoriesFromURL.includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...myParams.categoriesFromURL, cat]
                : myParams.categoriesFromURL.filter(category => category !== cat);

              setParam('category', updated);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
