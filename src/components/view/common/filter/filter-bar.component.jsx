import './filter-bar.css';
import Input from '../../../add/common/input/input.component';
import { CATEGORIES } from '../../../../data/constants';
import Tag from '../tag/tag.component';
import CheckBox from '../../../core/checkbox/checkbox.component';
import { DataContext } from '../../../core/providers/data-provider.component';
import { useContext } from 'react';

const FilterBar = ({ searchParams, updateParam, search, setSearch, categories }) => {

  const { isToggled, toggle } = useContext(DataContext);
  console.log(`isToggle`, isToggled);

  let tba = CATEGORIES.filter(item => !categories.includes(item));

  const updateSearch = (value) => {
    updateParam('search', value);
    setSearch(value);
  };

  const removeCategory = (value) => {
    let arr = searchParams.getAll('category')[0].split(',').filter(item => item != value);
    updateParam('category', arr);
  };

  const addCategory = (value) => {
    let arr = searchParams.getAll('category');
    arr.push(value);
    updateParam('category', arr);
  };

  return (
    <div className='filter-bar'>
      <Input placeholder="Search" onChange={(e) => updateSearch(e.target.value)} value={search} style={{ backgroundColor: `white`, color: `black`, border: '1px solid black' }}></Input>
      <div className='tags-bar'>
        <div className='tags'>
          {categories && categories.split(',').map(((item, i) => (<Tag key={item + i} onClick={() => { removeCategory(item); }}>{item}</Tag>)))}
          <Tag onClick={addCategory} add={true} tba={tba}>Cinder drinks</Tag>
        </div>
        <CheckBox defaultChecked={isToggled} onClick={toggle}></CheckBox>
      </div>
    </div>
  );
};

export default FilterBar;