import './input.css'

const Input = props => {
  const {label, ...inputProps} = props;

  return (
    <div className="input-group">
      {label ? <label>{label}</label> : null}
      <input {...inputProps} />
    </div>
  )
}

export default Input