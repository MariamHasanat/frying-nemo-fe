import './tag.css'

const Tag = ({children, add, onClick}) => {
  return (add?
    <div onClick={onClick} className='tag add'>
      <span>+</span>
    </div> :
    <div onClick={onClick} className='tag'>
      {children}
      <span>⨉</span>
    </div>)
}

export default Tag;