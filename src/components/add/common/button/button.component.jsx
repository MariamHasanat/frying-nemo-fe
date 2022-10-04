import './button.css'

const Button = ({name, ...props}) => {
  return <div className='mid'>
    <div className="btn">
    <button {...props}>{name}</button>
  </div>
  </div>
}

export default Button