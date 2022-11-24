import './filter-bar.css'
import Input from '../../../add/common/input/input.component'
import { CATEGORIES } from '../../../../data/constants'
import Tag from '../tag/tag.component'

const FilterBar = ({searchParams, updateParam, search, setSearch, categories}) => {

  let tba = CATEGORIES.filter(item => !categories.includes(item));

  const updateSearch = (value) => {
    updateParam('search', value)
    setSearch(value)
  }

  const removeCategory = (value) => {
    let arr = searchParams.getAll('category')[0].split(',').filter(item => item != value)
    updateParam('category', arr)
  }

  const addCategory = (value) => {
    let arr = searchParams.getAll('category');
    arr.push(value)
    updateParam('category', arr)
  }

  return (
    <div className='filter-bar'>
    <Input placeholder="Search" onChange={(e) => updateSearch(e.target.value)} value={search} style={{ backgroundColor: `white`, color: `black`, border: '1px solid black' }}></Input>
      <div className='tags'>
      {categories && categories.split(',').map(((item, i) => (<Tag key= {item+i} onClick={() => {removeCategory(item)}}>{item}</Tag>)))}
        <Tag  onClick={addCategory} add={true} tba={tba}>Cinder drinks</Tag>
      </div>
    </div>
  )
}

export default FilterBar