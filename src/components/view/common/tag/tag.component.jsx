import './tag.css'
import { CATEGORIES } from '../../../../data/constants'

const Tag = ({children, add, onClick, tba}) => {
  return (add?
    <div className='tag add'>
      <select onChange={(e) => {onClick(e.target.value)}} name="cars" id="cars">
      <option selected value='add'>Add value</option>
        {tba.map(item => <option value={item}>{item}</option>)}
      </select>
    </div> :
    <div onClick={onClick} className='tag'>
      {children}
      <span>⨉</span>
    </div>)
}

export default Tag;