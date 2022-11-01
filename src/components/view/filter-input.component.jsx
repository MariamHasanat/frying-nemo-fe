import { CATEGORIES } from '../../data/constants';
import Input from '../common/input/input.component';
import Select from '../common/select/select.component';
import './filter-input.css';

const FilterBar = props => {

  return (

    <div className='filter-bar-container'>

      <Input
        value={props.searchParam}
        type='Search'
        placeholder={'search'}
        onChange={e => {
          var userInput = e.target.value.trim();

          const newParam = new URLSearchParams(props.params);
          if (userInput)
            newParam.set('search', userInput);
          else newParam.delete('search');

          props.setParams(newParam);
        }}
      />
      <Select
      name='categories'
      label='categories'
      options={CATEGORIES}
      />
    </div>
  );
};

export default FilterBar;