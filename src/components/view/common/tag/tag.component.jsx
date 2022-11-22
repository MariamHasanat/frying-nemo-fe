import './tag.css'

const Tag = ({children, add, onClick, tba}) => {
  return (add?
    <div className='tag add'>
      <select onChange={(e) => {onClick(e.target.value)}} name="categories" id="categories">
      <option value='add'>Add value</option>
        {tba.map(item => <option value={item}>{item}</option>)}
      </select>
    </div> :
    <div onClick={onClick} className='tag'>
      {children}
      <span>⨉</span>
    </div>)
}

export default Tag;