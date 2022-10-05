import './button.css'

const Button = ({name, ...props}) => {
  return (
    <div className="btn">
      <button {...props}>{name}</button>
    </div>
  )
}

export default Button