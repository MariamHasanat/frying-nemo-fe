import './filter-bar.css'
import Input from '../../../add/common/input/input.component'
import { CATEGORIES } from '../../../../data/constants'

const FilterBar = ({selectedCategory, setSelectedCategory, updateParam, search, setSearch}) => {

  const updateCategory = (value) => {
    updateParam('category', value)
    setSelectedCategory(value)
  }

  const updateSearch = (value) => {
    updateParam('search', value)
    setSearch(value)
  }

  return (
    <div className='view-header'>
      <div className='selector'>
      {['All', ...CATEGORIES].map(((item, i) => (<p className={selectedCategory == i ? `selected` : ``} onClick={() => { updateCategory(i); }}>{item}</p>)))}
      </div>
      <Input placeholder="Search" onChange={(e) => updateSearch(e.target.value)} value={search} style={{ backgroundColor: `white`, color: `black`, border: '1px solid black' }}></Input>
    </div>
  )
}

export default FilterBar