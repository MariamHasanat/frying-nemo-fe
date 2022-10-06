import './button.css'

const Button = ({name, width, rmBorder, ...props}) => {
  return (
    <div id='btn' style={{width: width}} className="btn">
      <button style={rmBorder? {borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'} : {}} {...props}>{name}</button>
    </div>
  )
}

export default Button