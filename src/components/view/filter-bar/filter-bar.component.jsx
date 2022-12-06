import './filter-bar.css';
import Input from "../../common/input/input-component";
import Select from '../../common/select/select-component';
import CATEGORIES from '../../../data/categories';
import CheckBox from '../../common/toggle-bullets/checkbox.component';
import { useParams } from '../../../hooks/params.hook';


const FilterBar = () => {
  const { myParams, setParam } = useParams();

  return (
    <div className="filter-bar">
      <Input
        type="search"
        label="Search for Item"
        value={myParams.searchTerms}
        onChange={e => setParam('searchTerms', e.target.value)}
        placeholder="Search"
      />
      <Input
        type="number"
        value={myParams.minValue}
        onChange={e => setParam('minValue', e.target.value)}
        placeholder="Min Value"
      />
      <Input
        type="number"
        value={myParams.maxValue}
        onChange={e => setParam('maxValue', e.target.value)}
        placeholder="Max Value"
      />
      <div className="categories">
        {CATEGORIES.map(cat => (
          <CheckBox
            key={cat}
            label={cat}
            checked={myParams.categoryFromURL.includes(cat)}
            onChange={e => {
              const updated = e.target.checked
                ? [...myParams.categoryFromURL, cat]
                : myParams.categoryFromURL.filter(category => category !== cat);

              setParam('categoryFromURL', updated);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;

