import './input.css'

const Input = props => {
  const {label, required, rmBorder, ...inputProps} = props;

  return (
    <div className="input-group">
      {label &&
      (<label>
        <span>{label}</span>
        &nbsp;
        {required && (<span className='required'>*</span>)}
        </label>)}
      <input style={rmBorder? {borderRight: 'none', borderTopRightRadius: '0px', borderBottomRightRadius: '0px'} : {}} {...{required: required, ...inputProps}} />
    </div>
  )
}

export default Input